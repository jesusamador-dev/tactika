<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
/* The main PHPMailer class. */
require './PHPMailer/src/PHPMailer.php';
/* SMTP class, needed if you want to use SMTP. */
require './PHPMailer/src/SMTP.php';

$post = $_POST;
$data = (object) $post;

if (isset($data)) {

    try {
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'secure.emailsrvr.com';
        $mail->Port = 465;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "ssl";
        $mail->Username = 'jesus.amador@letech.mx';
        $mail->Password = 'JaLT1807$';
        $mail->setFrom('jesus.amador@letech.mx', 'Barhub');
        $mail->addReplyTo('no-reply@letech.mx', 'No Responder');
        $mail->addAddress('jesus.amador@kabik.com.mx');
        $sub = "Nuevo mensaje de cliente";
        $mail->Subject = $sub;

        $body = "Nombre: " . $data->nombre . '<br>';
        $body = "Correo: " . $data->correo . '<br>';
        $body .= "Mensaje : " . "<br>" . $nombre->mensaje;

        $mail->Body = $body;
        $mail->IsHTML(true);
        if ($mail->send()) {
            $result = array("message" => "true");
            echo json_encode($result);
        } else {
            $result = array("message" => "false");
            echo json_encode($result);
        }
    } catch (Exception $e) {
        $result = array("message" => "false");
        echo json_encode($result);
    }
} else {
    $result = array("message" => "false");
    echo json_encode($result);
}
