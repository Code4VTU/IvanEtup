
<!DOCTYPE html>
<html>
  <head>
    <title>Пътеводител </title>
    <style>
      html, body, #map-canvas {
        height: 100%;
        margin: 0px;
        padding: 0px;
        width:100%;
      
      }
      #panel {
               background-color: #fff;
         width: 100%; height: 70px;
                    }
    
@media screen and (min-width: 990px) {
  .top-nav {
 visibility: hidden;

}
.menu {
 visibility: hidden;

}

}
@media screen and (max-width: 990px) {
  #wrap {
 visibility: hidden;

}}
    footer {
    position:fixed;
    bottom: 0px;
    float: right;
    height: 50px;
    margin: 0px 50px 0px 0px;
    background: #29485f;
    color: #000;
    text-align: right;
    padding: 10px 30px;
	font-size: 2em;
	font-color: white;
}
     
    </style>
   <link rel="shortcut icon" href="images/logo.ico"/>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />

<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />	
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
<script src="js/jquery.min.js"></script>
   <script src="http://maps.googleapis.com/maps/api/js"></script>
  <script type="text/javascript" src="js/sevt_user.js"></script>
 <script type="text/javascript" src="js/sevt.js">

    </script>

    <script>
function start () {
	
	Initialize(42.6194,25.393,13,map); 
	

	}
 set ();

	google.maps.event.addDomListener(window, 'load', start);
	
  
	
	
</script>
  </head>
  <body>
  <div class="header">
		<div class="container">	
			<div class="logo">
				
				<img src="images/logo.png" alt="" style=" width: 50%;
   height: auto;  display: block;
  margin-left: auto;
  margin-right: auto;
   ">

			</div>
				
				
			</div>
		</div>

  <div class="top-nav">
<ul>
<li> <select id="selectBox" style="   width: 100%;
      
      font-size: 2em; float:left; 
}" onchange="changeFunc();">
  <option  value="1">Автобус 1</option>
  <option  value="3">Автобус 3</option>
  <option value="4">Автобус 4</option>
  <option value="5" selected>Автобус 5</option>
  

</select></li>

<li><input onclick="deleteMarkers();  RemovePolyline(); BusMarker(allMarkers); " style=" width: 100%; font-size: 2em;  float:left; "  type=button value="Всички спирки"></li>
<li><select id="selectBox3" style=" font-size: 2em;  width: 100%;
      float:left; " onchange="places2();">
  <option value="1">Музей на розата</option>
  <option  value="3">Тракийска гробница</option>
  <option value="5" selected>Лъвова Чешма</option>
 
 
</select></li>
<li><input onclick="deleteMarkers();  RemovePolyline(); myLocation(); " style=" width: 100%; font-size: 2em;  float:left; "  type=button value="Моето местоположение"></li>

					</ul>
				
				</div>


<br>
<br>


<div id="panel" >


<span class="menu" ><img src="images/menu2.png"  alt="" style="width:70px; height:70px;"> </span>


<script>
$("span.menu").click(function(){
	$(".top-nav ul").slideToggle(500, function(){
						});
					});
			</script>
<div id="wrap">
           <select id="selectBox4" style="   width: 25%;
     height: 100%;    
      font-size: 2em; float:left; 
}" onchange="changeFunc2();">
  <option value="1">Автобус 1</option>
  <option  value="3">Автобус 3</option>
  <option value="4">Автобус 4</option>
  <option value="5" selected>Автобус 5</option>
  <option value="12">Автобус 12</option>
  <option  value="13">Автобус 13</option>
  <option value="14">Автобус 14</option>
 
  

</select>
      <input onclick="deleteMarkers();  RemovePolyline(); BusMarker(allMarkers); " style=" width: 25%; font-size: 2em; height: 100%; float:left; "  type=button value="Всички спирки">
      <select id="selectBox2" style=" font-size: 2em;  width: 25%;
     height: 100%; float:left; " onchange="places();">
  <option value="1">Музей на розата</option>
  <option  value="3">Тракийски гробница</option>
  <option value="5" selected>Лъвова Чешма</option>


</select>
<input onclick="deleteMarkers();  RemovePolyline(); myLocation(); " style=" width: 25%; font-size: 2em; height: 100%; float:left; "  type=button value="Моето местоположение">

    </div> </div>
	 
    <div id="SEVTmap" style="width:100%; height:80%; ">

</div>
   
    

    
    
    
   
   
		
        
     

  </body>
</html>