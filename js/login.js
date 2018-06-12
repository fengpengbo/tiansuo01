$(function(){
	$(".login_B").click(function(){
		if($("#userName").val().length<2||$("#userName").val().length>10){
			alert("用户名应在2到10个字符间！");
		}else if($("#userPass").val().length<6){
			alert("密码必须在6位以上！");
		}else{
			$.post("login.php",{username:$("#userName").val(),password:$("#userPass").val()},function(data){
				if(data==0){
					alert("登陆成功");
					saveCookie("userName",$("#userName").val(),7);
					location.href="tiansuo.html";
				}else{
					alert("账号或密码错误！");
				};
			});
		};
		
	});
	
})