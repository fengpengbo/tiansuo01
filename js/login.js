$(function(){
	$(".login_B").click(function(){
		if($("#userName").val().length<5||$("#userName").val().length>5){
			alert("用户名应在5-15个字母！");
		}else if($("#userPass").val().length<6){
			alert("密码必须在6位以上！");
		}else{
			let xhr=new XMLHttpRequest();
			xhr.open("post","login.php",true);
			xhr.onreadystatechange=function(){
				if (xhr.readyState==4 && xhr.status==200) {
					if(xhr.responseText=="0"){
						saveCookie("userName",$("#userName").val(),7);
						location.href="tiansuo.html";
					}else{
						alert("账号或密码错误！");
					}
				}
			}
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			let sendstr="username="+$("#userName").val()+"&&password="+$("#userPass").val();
			xhr.send(sendstr);
			// $.post("login.php",{username:$("#userName").val(),password:$("#userPass").val()},function(data){
			// 	if(data==0){
			// 		alert("登陆成功");
			// 		saveCookie("userName",$("#userName").val(),7);
			// 		location.href="tiansuo.html";
			// 	}else{
			// 		alert("账号或密码错误！");
			// 	};
			// });
		};
		
	});
	
})