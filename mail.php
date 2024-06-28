<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $date = $_POST['date'];
  $email = $_POST['email'];
  $text = $_POST['text'];

  $to = 'Mishanya_05@bk.ru';
  $subject = 'Новое сообщение с сайта';
  $message = "Имя: $name\nДата: $date\nEmail: $email\nКомментарий: $text";
  $headers = 'From: noreply@mail.com' . "\r\n" .
    'Reply-To: noreply@mail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);

  header('Location: index.html');
  exit;
}
?>
