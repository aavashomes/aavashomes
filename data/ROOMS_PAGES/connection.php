<?php
$servername="localhost";
$username="root";
$password="";
$dbname="aavashomes";

$conn=mysqli_connect($servername,$username,$password,$dbname);
if($conn)
{
	echo "";
}
else
{
	die("connection error because".mysqli_connect_error());
}

?>