<?php
require_once '../db_config/db_config.php';

class HomeModel extends DbConfig
{
    public function getListEntregas()
    {
        $arr = [
            'text' => 'teste'
        ];
        return $arr;
    }
}