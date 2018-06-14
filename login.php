<?php

header("Content-type","text/html;charset=utf-8");
//建立连接
$conn = mysql_connect("localhost","root","root");
//选择数据库
mysql_select_db("tiansuo",$conn);

	$username = $_POST['userName'];
	$password = $_POST['userPass'];
//执行SQL语句
$sqlStr ="select * from yonghu where username='".$username."' and password='".$password."'";
$result = mysql_query($sqlStr,$conn);
$rows = mysql_num_rows($result);
//断开连接
mysql_close($conn);

if($rows==0){
	echo "1"; //没有查找到
}else{
	echo "0";
}

?>