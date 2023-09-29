<?php
require_once '../model/LoginModel.php';
$model = new LoginModel;
$login = $_REQUEST['login'] ?? '';
$senha = $_REQUEST['senha'] ?? '';

$rs = $model->login($login, $senha);
if ($rs) {
    echo json_encode(["status" => 200], JSON_INVALID_UTF8_IGNORE);
} else {
    echo json_encode(["status" => 401], JSON_INVALID_UTF8_IGNORE);
}
