$(function(){
//导航栏
	$('.box').on('mouseenter', function() {
		$(".nav_con").removeClass('hide');
	}).on('mouseleave', function() {
		$(".nav_con").addClass('hide');
		$(".sub").addClass('hide');
	}).on('mouseenter', '.nav a', function(e) {
		var li_data = $(this).attr('data-id');
		$(".sub").addClass('hide');
		$('.sub[data-id="' + li_data + '"]').removeClass('hide');
	})

    //回到顶部
    $(".toTop").click(function () {
	 	$('html,body').animate({
			scrollTop:"0px"
		},
		500);			
    });
    var nav = document.getElementById('navid');
    var navhide = document.getElementById('navhide');
		window.onscroll = function () {
			var top = document.documentElement.scrollTop || document.body.scrollTop;
			if(top >=100){
				nav.style.cssText="display: block;";
				navhide.style.cssText="display: none;";
			} else {
				nav.style.cssText="display: none;";
				navhide.style.cssText="display: block;";
			}
		};

})
