<?php
require_once '../controller/LoginModel.php';
$model = new LoginModel;
$login = $_REQUEST['login'] ?? '';
$senha = $_REQUEST['senha'] ?? '';

$rs = $model->login($login, $senha);
if ($rs) {
    echo 'logado';
} else {
    echo 'nao logado';
}
