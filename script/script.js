$(document).ready(function(){
	$(window).scroll(function() {
		if ($(document).scrollTop() > 1110){
			$(".navbar").css("background-color", "rgba(255,165,0,1)");
			$("#tab1").removeClass("active");
			$("#tab2").removeClass("active");
			$("#tab3").addClass("active")
		}else if ($(document).scrollTop() > 550) { 
          	$(".navbar").css("background-color", "rgba(1,1,1,1)");
          	$("#tab1").removeClass("active");
			$("#tab2").addClass("active");
			$("#tab3").removeClass("active")
        } else {
         	$(".navbar").css("background-color", "rgba(0,0,0,0)");
         	$("#tab1").addClass("active");
			$("#tab2").removeClass("active");
			$("#tab3").removeClass("active")
        }
    });

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
