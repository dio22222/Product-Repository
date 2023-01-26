<?php

require '../boot/boot.php';

use ProductRepository\Product;

// Response Headers
header('Access-Control-Allow-Origin: http://localhost:5173');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Construct Sample Response Object
$response = [
    'message' => 'hello'
];

// Encode Response into JSON
$response = json_encode($response);

// Respond
print_r($response);