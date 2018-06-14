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
	function checkAll(type,value){
		var reg = null;
		switch(type){
			case "username":reg = /^[a-zA-Z_]\w{5,15}$/;break;
			case "email":reg = /^\w+@[a-zA-Z0-9]+\.(com|cn|net|top|vip)$/;break;
			case "phoneNumber":reg = /^1[^0126]\d{9}$/;break;
			case "personId":reg = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])\d{3}[0-9xX]$/;break;
			default:;
		}
		if(reg!=null){
			if(reg.test(value)){
				return true;
			}
		}
		return false;	
	}
	
	$("#userName").blur(function(){
		if(checkAll("username",$("#userName").val())==false){
			$("#spanId").html("请输入5-15个字母！");
			$("#spanId").css({fontSize:"12px",color:"#606060"});
		}else{
			$.post("cheakup.php",{username:$("#userName").val()},function(data){
				if(data==1){
					$("#spanId").html("用户名可以使用");
					$("#spanId").css({fontSize:"12px",color:"#606060"});
				}else{
					$("#spanId").html("用户名被占用，请重新输入。");
					$("#spanId").css({fontSize:"12px",color:"#606060"});
				};
			});
		}
				
	});

	$("#phoneId").blur(function(){
		if(checkAll("phoneNumber",$("#phoneId").val())){
			$("#spanId3").html("√");
			$("#spanId3").css({fontSize:"12px",color:"#606060"});
		}else{
			$("#spanId3").html("手机格式不正确");
			$("#spanId3").css({fontSize:"12px",color:"#606060"});
		}
	});

	$("#mailId").blur(function(){		
		if(!checkAll("email",$("#mailId").val())){
			$("#spanId4").html("邮箱地址格式不正确");
			$("#spanId4").css({fontSize:"12px",color:"#606060"});
		}else{
			$("#spanId4").html("√");
			$("#spanId4").css({fontSize:"12px",color:"#606060"});
		}
	});
	
	$("#querenmima").blur(function(){
		if($("#userPass").val().length<6){
			alert("密码必须在6位以上！");
		}else if($("#userPass").val()==$("#querenmima").val()){
			$("#spanId2").css({height:"20px",paddingLeft:"30px",background:"url(img/input.png) no-repeat 7px -37px"});
		}else{
			$("#spanId2").css({height:"20px",paddingLeft:"30px",background:"url(img/input.png) no-repeat 7px 0px"});
		};
	});
	
	$(".subm").click(function(){
		if($("#userPass").val()!==$("#querenmima").val()){
			alert("两次密码输入不一致！");
		}else if($("#userName").val().length<5||$("#userName").val().length>15){
			alert("用户名应在5-15个字母！");
		}else if($("#userPass").val().length<6){
			alert("密码必须在6位以上！");
		}else{
			$.post("register.php",{username:$("#userName").val(),password:$("#userPass").val()},function(data){
				if(data==1){
					alert("恭喜您，注册成功");
					location.href="login.html";
				}else{
					alert("0.0……");
				}
			})
		}
		
	});
})