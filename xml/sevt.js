var SEVTmap;
var MarkersArray = new Array();
var RoadBuffer;
var GeoLoc;
var UserLoc;




function Initialize(Lat,Lng,Zoom,DivName) {                                 // Инициалинизиране на самата карта чрез Google Maps API
  
  if (!Lat || !Lng) {
	
	console.log('Грешка! Неверни координати');	
	return;																// Проверяване на незадалжителния параметър Zooм, и приравняване на 13 (Стойност по подразбиране) ако аргумента е празен
}
  

  if (!Zoom) {
	var Zoom = 13; 
	console.log('Използване на нормалното увеличение.');												// Проверяване на незадалжителния параметър Zooм, и приравняване на 13 (Стойност по подразбиране) ако аргумента е празен
}

if (!DivName) {
	var DivName = 'mapDiv';   
console.log('Изполаване на нормално име за Div.');									// Проверяване на незадалжителния параметър Zooм, и приравняване на 13 (Стойност по подразбиране) ако аргумента е празен
}
		
	var MapCenter = new google.maps.LatLng(Lat, Lng);										// Превеждане на входните данни в координати, които Maps може да използва 
  var mapOptions = {                                                // Създаване на масив с настройки за картата
    zoom: Zoom,                                                     // Определя стойността на мащаба ( обикновено стойността е от 5 до 20 но може и по-екстремни стойности ) 
    center: MapCenter,                                              // Когато се визуализира картата показва площ, чийто център се определя от тук ( в случая стойност зададена на функцията )
    mapTypeId: google.maps.MapTypeId.ROADMAP                        // Избира вида на визуализация на картата 
  };
  
 
	   SEVTmap = new google.maps.Map(document.getElementById(DivName),   // Поствя картата в Div, който се задава от потребителя и определя масив с настройки за картата
      mapOptions);




}

function addMarker(Location, Title, InfoWindow) {          // Функцията добавя маркер на картата
   
    if(!Location) {
	  
	   console.log ('Грешка! Невалидини аргумени към функцията.');
	   return;
   }																	// Проверка за аргументи и грешки
   
   if(!Title) {
	   var Title= 'Маркер';
	   console.log ('Използване на нормално име за маркера.');
   }
   
   
   
   var NewMarker = new google.maps.Marker({
    position: Location,
	draggable: false,
    animation: google.maps.Animation.DROP,
	title: Title,
	map: SEVTmap
  });

  
  MarkersArray.push(NewMarker);                   		//Проверява дали е предоставен инфо прозорец
  
  if (!InfoWindow) {
	  console.log ('Не е представен инфо прозорец.')
	  return;
  }
  
   NewMarker.addListener('click', function() {
    InfoWindow.open(SEVTmap, NewMarker);
  });
  
}



 

function BusMarker(BusMarkers) {                             // Функцията добавя маркери от XML файл
  
var DataArray=BusMarkers.getElementsByTagName("report");    // Всеки блок от данни е в таг с име report

for(var i=0; i<DataArray.length; i++) {

var Lat =DataArray[i].getElementsByTagName("lat")[0].childNodes[0].nodeValue ;
var Lng =DataArray[i].getElementsByTagName("lng")[0].childNodes[0].nodeValue ;        // Сканира таговете в report и събира данни за местоположението и името на маркера
var Name=DataArray[i].getElementsByTagName("name")[0].childNodes[0].nodeValue ;


var MarkerPosition = new google.maps.LatLng(Lat, Lng);

  addMarker (MarkerPosition,Name);                                 // добавя маркера

 

  }



}


function addPolyline (Poly,Color){                 // Функцията създава линия от предоставени координати в специалния Polyline формат на Maps API и цвят
	
	if(!Poly) {
	console.log ('Грешка! Няма предоставени данни.')
	return ;
}
														//Проверява за грешки и аргументи
	if(!Color) {
	console.log ('Използване на нормален цвят за линията.')
	var Color = '#3333FF';
}
 
 RoadBuffer = new google.maps.Polyline({           // Пълнене на буфера с инициализация на нова линия
    path: Poly,                               // Задаване на пътя на линията чрез масива, който напълнихме с предишното обхождане
    geodesic: true,                                // Избира се дали рисуването на линията да се съобразява с формата на планетата
    strokeColor: Color,
    strokeOpacity: 1.0,                            // Избор на цвят, тежест и плътност на линията
    strokeWeight: 5
  });
RoadBuffer.setMap(SEVTmap);     			// Изобразява линията
	
}




function BusRoadsWrite(BusRoads,Color) {                            // Инициализира функцията, която рисува линии ( Polylines ) от зададен файл с координати

if(!BusRoads) {
	console.log ('Грешка! Не е предоставен файл за координатите.')
	return;
}

var RoadArray= new google.maps.MVCArray();                    // Дефинира специалния масив, в който се съхраняват координатите на линията
 
var DataArray=BusRoads.getElementsByTagName("report");         //
for(var i=0; i<DataArray.length; i++) {                        // Обхождане на масива 

var Lat =DataArray[i].getElementsByTagName("lat")[0].childNodes[0].nodeValue ;
var Lng =DataArray[i].getElementsByTagName("lng")[0].childNodes[0].nodeValue ;  // Събиране на данни за географска ширина и височина за един завой на линията

var RoadCoordinates = new google.maps.LatLng(Lat, Lng);  // Превъщане на събраните координати в специален масив, който Maps API използва
   RoadArray.push(RoadCoordinates);                      // Добавяне на данните за завоя в масива в специалния масив на линията


  
 }
if(!Color) {
	console.log ('Използване на нормален цвят за линията.')
	var Color = '#3333FF';
}
 
 RoadBuffer = new google.maps.Polyline({           // Пълнене на буфера с инициализация на нова линия
    path: RoadArray,                               // Задаване на пътя на линията чрез масива, който напълнихме с предишното обхождане
    geodesic: true,                                // Избира се дали рисуването на линията да се съобразява с формата на планетата
    strokeColor: Color,
    strokeOpacity: 1.0,                            // Избор на цвят, тежест и плътност на линията
    strokeWeight: 5
  });
RoadBuffer.setMap(SEVTmap);                        // Рисува линията на картата


}



function PathFind (Origin, Destination)        // Функцията връща Polyline масив с най-краткия път между два координата
{
	
	if (!Origin || !Destination) {
		
		console.log ('Грешка! Няма предоставени координати');
		return;
	}
		
 var directionsService = new google.maps.DirectionsService();  // Дефиниране на променливата за Google Directions Service
 var path = new google.maps.MVCArray();
 
  var request = { 								// Създаване на настройките за Direction service
       origin:Origin,
    destination:Destination,
    travelMode: google.maps.TravelMode.WALKING
  };
  
  directionsService.route(request, function(result, status) {  					// Извикване на DS
	  
    if (status == google.maps.DirectionsStatus.OK) {
		
       for(var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
		   
			      path.push(result.routes[0].overview_path[i]);						// Обхождане на резултатите и записването им в масив
				  
			  }
    }
  });
return path;
}





function PathBuild (Destination){                                  //Функцията създава най-краткия път от положението на потребителя до целта            
	
	var path = new google.maps.MVCArray();
	
	 function errorHandler(err) {						// Debug за HTML Geolocation
            if(err.code == 1) {
               alert("Грешка: Няма достъп!");
            }
            
            else if( err.code == 2) {
               alert("Грешка: Местоположението ви не е достъпно!");
            }
         }
		  
		  
	var options = {timeout:1000};
if (navigator.geolocation) {                                           // Използва се HTML5 Geolocation API  за намиране на координатите на потребителя
         navigator.geolocation.getCurrentPosition(function(position) {
			
			 var lat=position.coords.latitude;
			 var lng=position.coords.longitude;
			 
     UserLoc = new google.maps.LatLng(lat,lng);     
	 
	 var NewMarker = new google.maps.Marker({					// Маркер на местоположението
    position: UserLoc,
	draggable: false,
    animation: google.maps.Animation.DROP,
	map: SEVTmap
  });
   MarkersArray.push(NewMarker);
  
  var directionsService = new google.maps.DirectionsService();
 
 
  var request = {
       origin:UserLoc,
    destination:Destination,										// Използва се DS за намиране на най-кратък път
    travelMode: google.maps.TravelMode.WALKING
  };
  path.push(UserLoc);
  
  directionsService.route(request, function(result, status) {
	  
    if (status == google.maps.DirectionsStatus.OK) {
		
       for(var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
		   
			      path.push(result.routes[0].overview_path[i]);
				  
			  }
    }
  });
		 }
		 
		, errorHandler, options);            
   
   var Color = '#3333FF';

 
 RoadBuffer = new google.maps.Polyline({           // Пълнене на буфера с инициализация на нова линия
    path: path,                               // Задаване на пътя на линията чрез масива, който напълнихме с предишното обхождане
    geodesic: true,                                // Избира се дали рисуването на линията да се съобразява с формата на планетата
    strokeColor: Color,
    strokeOpacity: 1.0,                            // Избор на цвят, тежест и плътност на линията
    strokeWeight: 5
  });
RoadBuffer.setMap(SEVTmap);
	
	}
	
addMarker (Destination);

	}




		
	function RemovePolyline (Polyline)				// Функцията премахва линия
{
	if (!Polyline){							// ако няма аргументи премахва нормалната линия RoadBuffer
		
		if (RoadBuffer!=null) {
		console.log ('Премахване на нормалната линия.');
		RoadBuffer.setMap(null);}
		return;
	}
	Polyline.setMap(null);
	
}
	
	function RemoveMarkers() {						
  for (var i = 0; i < MarkersArray.length; i++) {
    MarkersArray[i].setMap(null);
  }
}
	
	function deleteMarkers() {				//Функцията премахва всички маркери
  RemoveMarkers();
  MarkersArray = [];
}
	
	function sleep(milliseconds) {				//Функцията се използва за паузиране, чакане и изминаване на време чрез зададено време в милисекунди
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
	
	function myLocation ()						//Функцията слага маркер на положението на потребителя
{
	
	if (navigator.geolocation) {                                           // Използва се HTML5 Geolocation API  за намиране на координатите на потребителя
         navigator.geolocation.getCurrentPosition(function(position) {
			
			 var lat=position.coords.latitude;
			 var lng=position.coords.longitude;
			 
     UserLoc = new google.maps.LatLng(lat,lng);     
	 
	 var NewMarker = new google.maps.Marker({
    position: UserLoc,
	draggable: false,
    animation: google.maps.Animation.BOUNCE,
	map: SEVTmap
  });
   MarkersArray.push(NewMarker);
})
	}
	else { alert ('Местоположението ви не е налично.');}
}
	
function loadXMLDoc(filename)					//Функцията зарежда XML файлове
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else  // Код за стари версии на IE
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",filename,false);
xhttp.send();
return xhttp.responseXML;
}

function events () 
{
for (var c=0; c<count; c++)
{

 var infowindow = new google.maps.InfoWindow({
    content: description[c]
  });
var pos= new google.maps.LatLng(lat[c], lng[c]);

addMarker (pos, names[c], infowindow);
}}

//////////////////////////////////////////////////////////////////



