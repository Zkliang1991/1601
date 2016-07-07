<?php 
// error_reporting(E_ALL||~E_NOTICE);
// header('Content-type:text/html;charset=utf-8');
	function checkNum($num){
		return ($num%2) ? TRUE :FAlSE;
	}
	$num = $_GET["n"];
	if(checkNum($num) === TRUE){
		echo '奇数';
	}else{
		echo '偶数';
	}
 ?>