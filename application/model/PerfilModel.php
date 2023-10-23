<?php
require_once '../db_config/db_config.php';

class PerfilModel extends DbConfig
{
    public function getDadosUser($id)
    {
        $sql = "SELECT  
               `id`, `user`,  `telephone`,  `address`, `city`, `state`, `zip` 
               FROM login 
               WHERE id = ?  ";

        $result = $this->execQuery($sql, [$id]);

        if ($result->rowCount() > 0) {
            return $result->fetch(PDO::FETCH_ASSOC);
        }

        return false;
    }

    public function postDadosUser($dados)
    {
        $params = [
            $dados['telephone'],
            $dados['address'],
            $dados['city'],
            $dados['state'],
            $dados['zip'],
            $dados['id'],
        ];

        $sql = " UPDATE login  
                SET `telephone` = ? ,`address` = ? , `city` = ? , `state` = ?, `zip` = ? 
                WHERE id = ?  ";

        $result = $this->execQuery($sql, $params, true);

        if ($result->rowCount()) {
            return true;
        }

        $this->closeConn();
        return false;
    }
}