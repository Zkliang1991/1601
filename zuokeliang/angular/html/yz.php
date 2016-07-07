<?php 
error_reporting(E_ALL||~E_NOTICE);
header('Content-type:text/html;charset=utf-8');
	$name = $_POST["name"];
	if($name =="左可亮")
		echo "验证正确! ";
	else
		echo "验证失败！";
 ?>