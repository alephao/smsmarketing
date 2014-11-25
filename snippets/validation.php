<?php

    $errArray = array();
    $errors = 0;

    if ( !isset($_POST['mensagem']) || strlen($_POST['mensagem']) < 5 ) {
        $errors++;
        array_push($errArray, 'Você não digitou uma mensagem ou sua mensagem é muito curta.');
    }

    if ( !isset($_POST['cidades-brasil']) ) {

        $errors++;
        array_push($errArray, 'Você não selecionou uma cidade.');

    } else if ( count($_POST['cidades-brasil']) > 10 || count($_POST['cidades-brasil']) > $_POST['maxcities'] ) {
        $errors++;
        array_push($errArray, 'A quantidade de cidades que você escolheu ultrapassa a quantidade permitida no plano que deseja contratar.');
    }
?>