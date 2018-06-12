$(function(){
//广告栏
	var num = 3;
	var oDiv = document.getElementById("ad");
	var t = setInterval(function(){
		num--;
		if(num == 0) {
			clearInterval(t);
			oDiv.style.display = "none";
		}
	},1000);
	document.getElementById("ggao").onclick=function(){
		oDiv.style.display = "block";
		document.getElementById("ggao").style.display = "none";
	}
	document.getElementById("del").onclick=function(){
		oDiv.style.display = "none";
		document.getElementById("ggao").style.display = "block";
	}
//轮播图
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
//cookie
	if(getCookie("userName")!=""){
		$(".use").children("a").eq(0).html("欢迎您"+getCookie("userName"));
	}
	$(".use a").eq(0).click(function(){
		removeCookie("userName");
	})

})



