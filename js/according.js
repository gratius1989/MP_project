$(document).ready(function(){
	var winWidth = window.innerWidth;
	var conHei;
	if ( winWidth > 1260) {
		conHei = "324px";
	}
	else if ( winWidth < 1260 && winWidth >= 1024 ) {
		conHei = "400px";
	}
	else if ( winWidth < 1024 && winWidth >= 768 ) {
		conHei = "200px";
	}
	else {
		conHei = "675px";
	}	
	
	$(window).resize(function(){
		winWidth = window.innerWidth;
		if ( winWidth > 1260) {
			conHei = "324px";
		}
		else if ( winWidth < 1260 && winWidth >= 1024 ) {
			conHei = "400px";
		}
		else if ( winWidth < 1024 && winWidth >= 768 ) {
			conHei = "200px";
		}
		else {
			conHei = "675px";
		}	
	}); 
	
	
	
	var contentAcc = $(".main-content__according-wrapper__item__content:not(.exemplary)");
	var heightCont = $('.first').innerHeight();
	$('.first').css("max-height", conHei);
	$(".main-content__according-wrapper__item__title").on("click", function(){
		contentAcc.css("max-height", "0");
		$(".main-content__according-wrapper__item__title").removeClass("on");
		$(this).addClass("on");
		console.log(conHei);
		$(this).next().css("max-height", conHei);
	});
	
}); 
