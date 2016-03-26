
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
    if (selectedValue==3) {deleteMarkers();  RemovePolyline(); var Grobnica= new google.maps.LatLng(42.625778,25.399198); PathBuild(Grobnica);}
    if (selectedValue==5) {deleteMarkers();  RemovePolyline(); var Cheshma= new google.maps.LatLng(42.618844,25.392510); PathBuild(Cheshma);}
    if (selectedValue==1) {deleteMarkers();  RemovePolyline(); var Rozarium= new google.maps.LatLng(42.622926,25.388079); PathBuild(Rozarium); }
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
   