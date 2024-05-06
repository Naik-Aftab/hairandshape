<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $city = $_POST['city'];
  $phone = $_POST['phone'];





  try {
    $mail = new PHPMailer(true);

    // SMTP settings
    $mail->isSMTP();
    $mail->Host    = 'smtp.gmail.com';
    $mail->SMTPAuth  = true;
    // $mail->Username  = 'nihalbrandmake5@gmail.com';
    $mail->Username  = 'hairnshapemarketing@gmail.com';
    // $mail->Password  = 'qrbk vkcl gilz obmi';
    $mail->Password  = 'nlli njwk qnci colz';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port    = 587;
    $mail->setFrom($email,'Hair And Shape');
    $mail->addAddress('hairnshapemarketing@gmail.com','Hair And Shape');
    $mail->isHTML(true);
    $mail->Subject = 'Contact Us Form Submission';
    $mail->Body = "Name: $name <br> Email: $email <br> City: $city <br> Phone No: $phone";

    $mail->send();
    header("Location: thank-you.html");

  } catch (Exception $e) {
    header("Location: index.html?mail-sent=false");
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

  }
 
}
