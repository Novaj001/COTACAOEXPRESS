<?php
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $nome = strip_tags($_POST['nome']);
    $phone = strip_tags($_POST['phone']);
    $to = "seuemail@dominio.com"; // Coloque seu email
    $subject = "Novo Pedido de Cotação";
    $message = "Nome: $nome\nWhatsApp: +258$phone\n";

    // Verifica upload
    if(isset($_FILES['imagem']) && $_FILES['imagem']['error'] == 0){
        $tmpName = $_FILES['imagem']['tmp_name'];
        $fileName = $_FILES['imagem']['name'];
        $fileContent = file_get_contents($tmpName);
        $boundary = md5(time());

        $headers = "From: CotacaoExpress <no-reply@dominio.com>\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n\r\n";

        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
        $body .= $message."\r\n";
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"".$fileName."\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"".$fileName."\"\r\n\r\n";
        $body .= chunk_split(base64_encode($fileContent))."\r\n";
        $body .= "--$boundary--";

        if(mail($to, $subject, $body, $headers)){
            echo "Sucesso! Em breve entraremos em contacto.";
        }else{
            echo "Erro ao enviar o email.";
        }
    } else {
        echo "Nenhuma imagem enviada.";
    }
}
?>