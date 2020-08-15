<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
if ($email = $_POST['newsletter__email']) {
  $title = "Подписка на рассылку от Universal News Magazine";
  $body = "
  <h2>Новый запрос на подписку</h2>
  <b>E-mail:</b> $email
  ";

  $header = 'location: thankyouforsubscribe.html'; 
} 
  
  // Настройки PHPMailer
  $mail = new PHPMailer\PHPMailer\PHPMailer();
  try {
      $mail->isSMTP();   
      $mail->CharSet = "UTF-8";
      $mail->SMTPAuth   = true;
      //$mail->SMTPDebug = 2;
      $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
  
      // Настройки вашей почты
      $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
      $mail->Username   = 'besttourplandrk@gmail.com'; // Логин на почте
      $mail->Password   = '9`]q]H?N'; // Пароль на почте
      $mail->SMTPSecure = 'ssl';
      $mail->Port       = 465;
      $mail->setFrom('besttourplandrk@gmail.com', 'Best Tour Plan'); // Адрес самой почты и имя отправителя
  
      // Получатель письма
      $mail->addAddress('kucrev@gmail.com');  
  
  
      // Отправка сообщения
      $mail->isHTML(true);
      $mail->Subject = $title;
      $mail->Body = $body;    
  
      // Проверяем отравленность сообщения
      if ($mail->send()) {header($header);} 
      else {$result = "error";}
  
      } catch (Exception $e) {
          $result = "error";
          $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
      }