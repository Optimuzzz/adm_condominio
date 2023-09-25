<?php
require_once '../db_config/db_config.php';

class LoginModel extends DbConfig
{
    public function login($login, $senha)
    {
        $params = [$login, $senha];
        $sql ="SELECT * FROM login WHERE user = ? AND senha = ? ";
        $result = $this->execQuery($sql, $params);
        if($result->rowCount() > 0){
            return true;
        } 
        return false;
    }
}
