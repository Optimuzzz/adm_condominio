<?php
require_once '../model/HomeModel.php';

$model = new HomeModel;

$params = array_keys($_REQUEST);

$res = @call_user_func_array(array($model, $params[0]), $params);

if ($res) {
    echo json_encode(["status" => 200, 'res' => $res], JSON_INVALID_UTF8_IGNORE);
} else {
    echo json_encode(["status" => 401], JSON_INVALID_UTF8_IGNORE);
}
