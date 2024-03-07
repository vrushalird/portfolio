<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $from_email = $_POST["email"];
    $to_email = 'vrushali.geek@gmail.com';

    $headers = "From: " . $from_email . "\r\n";
    $headers .= "Reply-To: " . $from_email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $success = mail($to_email, $subject, $message, $headers);

    if ($success) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
