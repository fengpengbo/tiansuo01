$(function(){
	//选项卡
	document.getElementById("phone").onclick=function(){
		document.getElementById("phone").style.cssText="border-bottom:none;color: red;";
		document.getElementById("email").style.cssText="border-bottom: 1px solid #9a9a9a;color: #000;";
		document.getElementById("phoneon").style.display="block";
		document.getElementById("emailon").style.display="none";
	}
	document.getElementById("email").onclick=function(){
		document.getElementById("email").style.cssText="border-bottom:none;color: red;";
		document.getElementById("phone").style.cssText="border-bottom: 1px solid #9a9a9a;color: #000;";
		document.getElementById("phoneon").style.display="none";
		document.getElementById("emailon").style.display="block";
	}
	//注册认证
	$("#userName").blur(function(){
		if($("#userName").val().length<2||$("#userName").val().length>10){
			alert("用户名应在2到10个字符间！");
		}else{
			$.post("cheakup.php",{username:$("#userName").val()},function(data){
				if(data==1){
					// $("#spanId").html("用户名可以使用");
					$("#spanId").css({height:"20px",paddingLeft:"30px",display:"inline-block",color:"#606060",background:"url(img/input.png) no-repeat 7px -37px"});
				}else{
					// $("#spanId").html("用户名被占用，请重新输入。");
					$("#spanId").css({height:"20px",display:"inline-block",color:"#606060",background:"url(img/input.png) no-repeat 7px 0px"});
				};
			});
		}
		
				
	});
	
	
	$("#querenmima").blur(function(){
		if($("#userPass").val().length<6){
			alert("密码必须在6位以上！");
		}else if($("#userPass").val()==$("#querenmima").val()){
			$("#spanId2").css({height:"20px",paddingLeft:"30px",display:"inline-block",background:"url(img/input.png) no-repeat 7px -37px"});
		}else{
			$("#spanId2").css({height:"20px",paddingLeft:"30px",display:"inline-block",background:"url(img/input.png) no-repeat 7px 0px"});
		};
	});
	
	$(".subm").click(function(){
		if($("#userPass").val()!==$("#querenmima").val()){
			alert("两次密码输入不一致！");
		}else if($("#userName").val().length<2||$("#userName").val().length>10){
			alert("用户名应在2到10个字符间！");
		}else if($("#userPass").val().length<6){
			alert("密码必须在6位以上！");
		}else{
			$.post("register.php",{username:$("#userName").val(),password:$("#userPass").val()},function(data){
				if(data==1){
					alert("恭喜您，注册成功");
					location.href="../login.html";
				}else{
					alert("0.0……");
				}
			})
		}
		
	});
})