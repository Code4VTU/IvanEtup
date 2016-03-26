<!DOCTYPE html>
<html>
<head>
  <title></title>
  <style type="text/css">
    html, body {margin: 0; width:100%; height: 100%; }
    #map_canvas { position:absolute; top:50px;bottom:0;left:0;right:0;}
  </style>
  <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

  <script type="text/javascript">
    
     var map, path = new google.maps.MVCArray(), service = new google.maps.DirectionsService(), shiftPressed = false, poly;
   var lat=new Array();  var lng=new Array();

    google.maps.event.addDomListener(document, "keydown", function(e) { shiftPressed = e.shiftKey; });
    google.maps.event.addDomListener(document, "keyup", function(e) { shiftPressed = e.shiftKey; });
		
    function Init() {
    var myOptions = {
        zoom: 13,
        center: new google.maps.LatLng(42.6194, 25.393),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
                     draggableCursor: "crosshair"
      }

      map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	  poly = new google.maps.Polyline({ map: map });
      google.maps.event.addListener(map, "click", function(evt) {
        if (shiftPressed || path.getLength() === 0) {
          path.push(evt.latLng);
		  if(path.getLength() === 1) {
			poly.setPath(path);
		  }
        } else {
          service.route({ origin: path.getAt(path.getLength() - 1), destination: evt.latLng, travelMode: google.maps.DirectionsTravelMode.DRIVING }, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              for(var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
			    path.push(result.routes[0].overview_path[i]);
			    
			    lat.push(result.routes[0].overview_path[i].lat());
			    lng.push(result.routes[0].overview_path[i].lng());

			  }
            }
          });
        }
      });
    }
    
    function loadXMLDoc(filename)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else 
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",filename,false);
xhttp.send();
return xhttp.responseXML;
}

    
    function normalizer (){
      $.ajax({
    type: "POST",
    url: "add.php",
    dataType:'json',
    data:{ 'lat': lat, 'lng':lng},
    success: function(data){
        console.log(data); 
    }
})    }

  </script>
  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $lat = $_POST["lat"]; 
  $lng = $_POST["lng"];
   $sxe = simplexml_load_file('output.xml');
for ($i=0; $i<count ($lat); $i++)
{

$report=$sxe->addChild('report');
$report->addChild('lat', $lat[$i]);
$report->addChild('lng', $lng[$i]);


  }
  $output = $sxe->asXML('output.xml'); }
?>

</head>
<body onload="Init()">
 <input onclick="normalizer();" type=button value="save">
 <p style="margin:0;padding:10px;">Задръж SHIFT за да чертаеж извън пътищата</p>
  <div id="map_canvas"></div>
</body>
</html>