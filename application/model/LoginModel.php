<?php
require_once '../db_config/db_config.php';

class LoginModel extends DbConfig
{
    public function login($login, $senha)
    {
        $params = [$login, $senha];
        
        $sql ="SELECT  
                `id`, `user`,  `address`, `city`, `state`, `zip` 
               FROM login 
               WHERE user = ? 
               AND password = ? ";

        $result = $this->execQuery($sql, $params);

        if($result->rowCount() > 0){  
            return $result->fetch(PDO::FETCH_ASSOC); 
        } 
        
        return false;
    }
}
