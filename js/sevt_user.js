
var map;
var krun_xml;
var koprinka_xml;
var allMarkers;
var KoprinkaRoads_xml;
var KrunRoads_xml;
var linia1_xml;
var linia1_roads_xml;
var linia12_roads_xml;
var linia13_roads_xml;
var linia4_xml;
var linia12_xml;
var linia13_xml;
var linia13_roads_xml;
var linia14_roads_xml;



var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Лъвова чешма</h1>'+
      '<div id="bodyContent">'+
      '<p><b></b>Тя е един от символите на Града на розите.'+
	  'Идеята за поставянето й е още от 1893 година, когато казанлъчанинът Иван Патев, докарал с водопроводи в Казанлък'+
	  'вода от връх Бузлуджа в Стара планина със собствен водоизточник, докаран от 2 км .'+
	  'Родолюбивия казанлъчанин решил да направи подарък на българския княз Фердинанд I и съпругата му италианската принцеса Мария Луиза.'+
	 ' Изпратил писмо до Двореца в София с което уведомил Фердинанд за решението си.'+
	 'Самото изграждане на чешмата е през 1902 година когато Князът посещава Казанлък.'+
	 'Трогнат от жеста той отпуска средства от двореца и изпраща в Града на розите италианския архитект Арнолдо Дзоки, '+
	 'за да проектира чешмата.Дзоки е автор на статуята на Колумб в Буенос Айрес, на Гарибалди в Болоня и на Свети Франциск Асизки в Кайро. '+
	 'Тържественото освещаване е през 1903 година и от тогава носи името Княжеската или Царската чешма. Хората я наричат още Лъвова, защото трите бронзови чучура са с форма на лъвски глави.'+
 'Символ на града - пий вода от чешмата и съдбата ти завинаги остава свързана с града!'+
      '</div>'+
      '</div>';
	  
	  
var infowindow = new google.maps.InfoWindow({
    content: contentString
  });


  
var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Казанлъшка гробница</h1>'+
      '<div id="bodyContent">'+
      '<p><b></b>Гробницата е на тракийския владетел Ройгос. Открита е случайно на 19 април 1944 година под могилен насип от войници,'+
	'  които копаели окоп в североизточната част на Казанлък. Могилата имала вид на естествен завършек на природно хълмистото възвишение.'+
	'Тя била висока 7 m, с диаметър на основата 40 m. Войниците попаднали на иззидана каменна стена.'+
	'Любопитството ги накарало да я разбият, след което влезли в нисък и тесен коридор, където имало повалена правоъгълна гранитна плоча,'
	'а от там в кръгло засводено помещение. Осъзнали, че са открили нещо важно, те извикали археолог и той потвърдил предположенията им.'+
	'Така бил открит забележителен паметник от ранноеленистическата епоха у нас, който сега е сред Стоте национални туристически обекта.'+
      '</div>'+
      '</div>';
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });
  
  var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Музей на розата</h1>'+
      '<div id="bodyContent">'+
      '<p><b></b>Открит като музейна експозиция през 1967 г.,  през 1969 г. прераства в единствения по рода си Музей на розата.'+
	'С богат снимков, документален и веществен материал се проследява 330-годишната история на българското розопроизводство и традиционната култура.'+
	'Експозицията на музея е разположена в три основни зали, където са показани: оригинални снимки и документи за развитието на розопроизводството през '+
	'Възраждането и в началото на 20 век; инструменти за обработка на розовите градини, съдове за съхранение и износ на розово масло и розова вода; '+
	'историята на българските розотърговски къщи; материали, свързани с историята на Института по розата и съвременното розопроизводство.'+
      '</div>'+
      '</div>';
  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
  });
  
function set (){
	
	map = 'SEVTmap';
	 krun_xml=loadXMLDoc("xml/krun.xml");
 koprinka_xml=loadXMLDoc("xml/koprinka.xml");
 allMarkers=loadXMLDoc("xml/table.xml");
 KoprinkaRoads_xml=loadXMLDoc("xml/koprinka_roads.xml");
 KrunRoads_xml=loadXMLDoc("xml/krun_roads.xml");
 linia1_xml=loadXMLDoc("xml/linia1.xml");
 linia12_xml=loadXMLDoc("xml/linia12.xml");
 linia1_roads_xml=loadXMLDoc("xml/linia1_roads.xml");
 linia4_roads_xml=loadXMLDoc("xml/linia4_roads.xml");
 linia4_xml=loadXMLDoc("xml/linia4.xml");
  linia13_xml=loadXMLDoc("xml/linia13.xml");
  linia13_roads_xml=loadXMLDoc("xml/linia13_roads.xml");
  linia12_roads_xml=loadXMLDoc("xml/linia12_roads.xml");
 linia14_roads_xml=loadXMLDoc("xml/linia14_roads.xml");
}

function changeFunc() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue==3) {deleteMarkers();   BusMarker(koprinka_xml); BusRoadsWrite(KoprinkaRoads_xml);}
    if (selectedValue==5) {deleteMarkers();  RemovePolyline(); BusMarker(krun_xml); BusRoadsWrite(KrunRoads_xml);}
    if (selectedValue==1) {deleteMarkers();  RemovePolyline(); BusMarker(linia1_xml); BusRoadsWrite(linia1_roads_xml); }
    if (selectedValue==4) {deleteMarkers();  RemovePolyline();  BusMarker( linia4_xml); BusRoadsWrite(linia4_roads_xml); }
   


 }
 
 function changeFunc2() {
    var selectBox = document.getElementById("selectBox4");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue==3) {deleteMarkers();   BusMarker(koprinka_xml); BusRoadsWrite(KoprinkaRoads_xml);}
    if (selectedValue==5) {deleteMarkers();  RemovePolyline(); BusMarker(krun_xml); BusRoadsWrite(KrunRoads_xml);}
    if (selectedValue==1) {deleteMarkers();  RemovePolyline(); BusMarker(linia1_xml); BusRoadsWrite(linia1_roads_xml); }
    if (selectedValue==4) {deleteMarkers();  RemovePolyline();  BusMarker( linia4_xml); BusRoadsWrite(linia4_roads_xml); }
     if (selectedValue==12) {deleteMarkers();  RemovePolyline(); BusMarker(linia12_xml); BusRoadsWrite(linia12_roads_xml); }
    if (selectedValue==14) {deleteMarkers();  RemovePolyline();  BusMarker( linia4_xml); BusRoadsWrite(linia14_roads_xml); }
	  if (selectedValue==13) {deleteMarkers(); RemovePolyline();  BusMarker(linia13_xml); BusRoadsWrite(linia13_roads_xml);}

 }
 
 
function places() {
    var selectBox = document.getElementById("selectBox2");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue==3) {deleteMarkers();  RemovePolyline(); var Grobnica= new google.maps.LatLng(42.625778,25.399198); PathBuild(Grobnica); addMarker(Grobnica,'Казанлъшка гробница',infowindow2);}
    if (selectedValue==5) {deleteMarkers();  RemovePolyline(); var Cheshma= new google.maps.LatLng(42.618844,25.392510); PathBuild(Cheshma); addMarker(Cheshma,'Лъвова Чешма',infowindow);}
    if (selectedValue==1) {deleteMarkers();  RemovePolyline(); var Rozarium= new google.maps.LatLng(42.636261,25.390332); PathBuild(Rozarium); addMarker(Rozarium,'Музей на розата',infowindow3);}
	if (selectedValue==2) {deleteMarkers();  RemovePolyline(); var MOL= new google.maps.LatLng(42.438080,25.631768); PathBuild(MOL); }
	if (selectedValue==4) {deleteMarkers();  RemovePolyline(); var Ezikova= new google.maps.LatLng(42.428168,25.630009); PathBuild(Ezikova); }
  }
   


  
function places2() {
    var selectBox = document.getElementById("selectBox3");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue==3) {deleteMarkers();  RemovePolyline(); var Grobnica= new google.maps.LatLng(42.625778,25.399198); PathBuild(Grobnica);}
    if (selectedValue==5) {deleteMarkers();  RemovePolyline(); var Cheshma= new google.maps.LatLng(42.618844,25.392510); PathBuild(Cheshma);}
    if (selectedValue==1) {deleteMarkers();  RemovePolyline(); var Rozarium= new google.maps.LatLng(42.622926,25.388079); PathBuild(Rozarium); }
	if (selectedValue==2) {deleteMarkers();  RemovePolyline(); var MOL= new google.maps.LatLng(42.438080,25.631768); PathBuild(MOL); }
	if (selectedValue==4) {deleteMarkers();  RemovePolyline(); var Ezikova= new google.maps.LatLng(42.428168,25.630009); PathBuild(Ezikova); }
  }
   