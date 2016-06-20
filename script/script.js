$(document).ready(function(){


    $(window).scroll(function() {
		if ($(document).scrollTop() > 350) { 
          	$("#intro").css("color", "rgba(255,255,255,0)");
        } else if ($(document).scrollTop() > 300){
        	$("#intro").css("color", "rgba(255,255,255,0.7)")
        }else {
          	$("#intro").css("color", "rgba(255,255,255,1)");
        }
    });

});

$("#expand").click(function(){
	$("#myNav").css("height", "100%");
	$("body, html").css("overflow", "hidden");
});

$("#close, .x").click(function(){
	$("#myNav").css("height","0");
	$("body, html").css("overflow", "");
});
