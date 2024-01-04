// When Main Manue are worked
$( window ).scroll(function() {
	var height = $(window).scrollTop();
//Home Height =0
//About Height =550
//Service Height =950
//contact Height =3050
if(height => 500){
		document.getElementById("MyHm").style.textDecoration = "underline";
		document.getElementById("MyAbt").style.textDecoration = "none";
		document.getElementById("MySrvs").style.textDecoration = "none";
		document.getElementById("MyCntnt").style.textDecoration = "none";
}if(height >= 550) {
		document.getElementById("MyAbt").style.textDecoration = "underline";
		document.getElementById("MySrvs").style.textDecoration = "none";
		document.getElementById("MyCntnt").style.textDecoration = "none";
		document.getElementById("MyHm").style.textDecoration = "none";	
}if(height >= 950){
		document.getElementById("MySrvs").style.textDecoration = "underline";
		document.getElementById("MyAbt").style.textDecoration = "none";
		document.getElementById("MyCntnt").style.textDecoration = "none";
		document.getElementById("MyHm").style.textDecoration = "none";
}if(height >= 3050){
		document.getElementById("MyCntnt").style.textDecoration = "underline";
		document.getElementById("MyAbt").style.textDecoration = "none";
		document.getElementById("MySrvs").style.textDecoration = "none";
		document.getElementById("MyHm").style.textDecoration = "none";
}
}); 