<?php

require_once '../model/PerfilModel.php';

$model = new PerfilModel;

$params = array_keys($_REQUEST);

$res = @call_user_func_array(array($model, $params[0]), $_REQUEST);

if ($res) {
    echo json_encode(["status" => 200, 'data' => $res], JSON_INVALID_UTF8_IGNORE);
} else {
    echo json_encode(["status" => 401], JSON_INVALID_UTF8_IGNORE);
}