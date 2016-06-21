$(document).ready(function(){
	
	$(document).scroll(function(){
		var section1 = $("#profile").offset().top;
		var section2 = $("#portfolio").offset().top;
		var section3 = $("#contact").offset().top;

		if($(document).scrollTop() >= section1 && $(document).scrollTop() < (section2-50)){
			$('.navbar').css("background-color", "rgba(0,0,0,0)")
		}else if($(document).scrollTop() >= (section2-50) && $(document).scrollTop() < section3){
			$('.navbar').css("background-color", "rgba(1,1,1,1)")
		}else if($(document).scrollTop() >= section3){
			$('.navbar').css("background-color", "rgba(255,165,0,1)")
		}
	})


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
