<?php

if(isset($_POST['submit'])){
$to = "shovkoplyassergey@gmail.com";; // Здесь нужно написать e-mail, куда будут приходить письма
$phone = $_POST['phone']; // this is the sender's Email address
$first_name = $_POST['first_name'];
$subject = "Форма отправки сообщений с сайта";

$message = $first_name . " оставил заявку!" . " Телефон:" . $phone;


$headers = "From:" . $first_name;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";

}

?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://epicblog.net/index.php");}
window.setTimeout("changeurl();",3000);
</script>