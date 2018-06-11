//轮播图
function show(){
	let index = 0;
	let timer = null;
	function move(){
		index++;
		if(index >= $('.bg img').length){
			index = 0;
		}
		$('.bg img').eq(index).fadeIn(2000).siblings().fadeOut(2000);
		$('.banner ul li').eq(index).addClass('active').siblings().removeClass('active');
	}

	function autoMove(){
		timer = setInterval(()=>{
			move();
		},2000)
	}

	autoMove();

	$('.banner').hover(function(){
		clearInterval(timer);
	},function(){
		autoMove();
	})

	$('.banner ul li').each((k,v)=>{
		$(v).click(function(){
			index = k;
			$(this).addClass('active').siblings().removeClass('active');
			$('.bg img').eq(index).fadeIn(2000).siblings().fadeOut(2000);
			
		})
	})
}


//导航栏
function daohang(){
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
}
//回到顶部
// function huiding(){
//     var speed = 800;//滚动速度
// 	// var h=document.body.clientHeight;
//     //回到顶部
//     $(".toTop").click(function () {
// 	 	$('html,body').animate({
// 			$(window).scrollTop:"0px";
// 		},
// 		speed);			
//     });
// //     // 回到底部
// //     var windowHeight = parseInt($("body").css("height"));//整个页面的高度
// //     $("#toBottom").click(function () {
// // 		//alert(h);
// //         $('html,body').animate({
// // 			scrollTop: h+'px'
// // 		},
// // 		speed);
// //     });
// }



