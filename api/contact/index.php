<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

echo json_encode(array(
	"post" => $_POST['fullName']
));

if (empty($_POST['fullName']) && empty($_POST['email'])) die();

if ($_POST) {

	// set response code - 200 OK
	http_response_code(200);
	$subject = $_POST['fullName'];
	$to = "stijn@stinna-it.nl";
	$from = $_POST['email'];

	// data
	$msg = $_POST['phone'] . $_POST['message'];

	// Headers
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers);

	echo json_encode($_POST);

	echo json_encode(array(
		"sent" => true
	));
} else {

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}
