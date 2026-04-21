<?php
// These headers allow React (localhost:3000) to talk to PHP safely
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "studentdb";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed"]));
}

// Read the JSON data sent by React
$data = json_decode(file_get_contents("php://input"));

if(isset($data->name) && isset($data->email)) {
    $name = $conn->real_escape_string($data->name);
    $email = $conn->real_escape_string($data->email);
    $mobile = $conn->real_escape_string($data->mobile);
    $message = $conn->real_escape_string($data->message);

    $sql = "INSERT INTO connections (name, email, mobile, message) VALUES ('$name', '$email', '$mobile', '$message')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send message."]);
    }
}
$conn->close();
?>