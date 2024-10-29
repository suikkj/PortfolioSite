<?php

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);

$para = "lucasoliprogramador@gmail.com";
$assunto = "Mensagem Recebida! - Portfólio";

$body = "Nome: ".$nome."\n"."E-mail:".$email;

$head = "From: lucascoliveiraa22@gmail.com"."/n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

if(mail($para,$assunto,$body,$head)){
    echo("Mensagem enviada com sucesso!");
}
else{
    echo("Houve um erro ao enviar a mensagem! Favor tentar novamente.");
}


?>