<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
} else {
    session_destroy();
    session_unset();
    session_start();
}
require_once '../model/LoginModel.php';
$model = new LoginModel;
$login = $_REQUEST['login'] ?? '';
$senha = $_REQUEST['senha'] ?? '';

$rs = $model->login($login, $senha);
if ($rs) {

    $_SESSION['name'] = $rs['name'];
    $_SESSION['id_user'] = $rs['id'];

    echo json_encode(["status" => 200], JSON_INVALID_UTF8_IGNORE);
} else {
    echo json_encode(["status" => 401], JSON_INVALID_UTF8_IGNORE);
}
