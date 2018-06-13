<?php

header("Content-type","text/html;charset=utf-8");

$conn = mysql_connect("localhost","root","root");
//选择数据库
mysql_select_db("tiansuo",$conn);

$username = $_POST['userName'];
//$userPass = $_POST['userPass'];


$sqlStr ="select * from yonghu where username='".$username."'";/* and userPass='".$userPass."'";*/
$result = mysql_query($sqlStr,$conn);

$rows = mysql_num_rows($result);

mysql_close($conn);

if($rows==0){
		echo "0"; //没有查找到
	}else{
		echo "1";
	}



?>