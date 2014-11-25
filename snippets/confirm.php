<html>
<head>
    <title>Confirmação | SMS Marketing</title>

    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="../css/bootstrap.min.css"/>
    <link rel="stylesheet" href="../css/style.css"/>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

    <script type="text/javascript" src="../js/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="../js/bootstrap.min.js"></script>
</head>

<body>
<div class="container">

    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 text-center">
            <?php

            if ( isset($_POST['email']) ) {
                $body = 'Mensagem: "' . $_POST['mensagem'] . '"' . "\n" .
                        'Estados: ' . $_POST['estados'] . "\n" .
                        'Cidades: ' . $_POST['cidades'];
                $subject = 'Plano: ' . $_POST['plano'];
                $headers = 'From: ' . $_POST['email'] . "\r\n" .
                    'Reply-To: ' . $_POST['email'] . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();

                mail('brsmsmarketing@gmail.com', $subject, $body, $headers);

            } else {

                include 'validation.php';

                if ( $errors == 0 ){

                    $mensagem       =   $_POST['mensagem'];
                    $arrEstados     =   array();
                    $arrCidades     =   array();

                    foreach ( $_POST['estados-brasil'] as $estado ) {

                        array_push($arrEstados, $estado);

                    }

                    foreach ( $_POST['cidades-brasil'] as $cidade ) {

                        array_push($arrCidades, $cidade);

                    }

                    $arrSize = count($arrCidades);

                    echo "<h2>Mensagem:</h2>";
                    echo '<h4>"' . $mensagem . '"</h4>';

                    echo "<h2>Cidades:</h2>";

                    echo "<h4><ol class='centralizeList'>";

                    for( $i = 0; $i < $arrSize; $i++ ) {
                        echo "<li>$arrCidades[$i] - $arrEstados[$i]</li>";
                    }

                    echo "</ol></h4>";

                    echo "<h2>Plano:</h2>";

                    $maxcities = $_POST['maxcities'];

                    if ( $maxcities == 2 ) {
                        echo "<h4>Básico</h4>";
                        echo "<h2>Total:</h2>";
                        echo "<h4>R$250,00</h4>";
                    } else if ( $maxcities == 5 ) {
                        echo "<h4>Intermediário</h4>";
                        echo "<h2>Total:</h2>";
                        echo "<h4>R$400,00</h4>";
                    } else {
                        echo "<h4>Massivo</h4>";
                        echo "<h2>Total:</h2>";
                        echo "<h4>R$750,00</h4>";
                    }

                    echo "<hr/>";
                    echo "<form>";
                    echo "<h3>Digite seu email para confirmar a compra e enviaremos o link para o email.</h3>";
                    echo "<input type='email' name='email' style='width:100%'/><br/><br/>";
                    echo "<input type='hidden' name='mensagem' value='" . $mensagem . "'/>";
                    echo "<input type='hidden' name='estados' value='" . implode(', ',$arrEstados) . "'/>";
                    echo "<input type='hidden' name='cidades' value='" . implode(', ',$arrCidades) . "'/>";
                    echo "<input type='hidden' name='plano' value='" . $maxcities . "'/>";
                    echo "<input type='submit' name='submit' class='btn btn-default btn-lg' value='Finalizar Compra'/>";
                    echo "</form>";

                } else {
                    echo "<h3 class='text-danger'>$errors erros foram encontrados ao enviar seu formulário</h3><br/>";

                    echo "<ol class='centralizeList'>";

                    foreach ($errArray as $error) {
                        echo "<li>$error</li>";
                    }

                    echo "</ol>";

                    echo "<a class='btn btn-default' href='/autoSMSmarketing'>Voltar para o formulário</a>";
                }
            }
            ?>
        </div>
    </div>

</div>
</body>
</html>