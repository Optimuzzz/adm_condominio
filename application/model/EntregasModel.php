<?php
require_once '../db_config/db_config.php';

class EntregasModel extends DbConfig
{
    public function getListEntregas()
    {
        $sql = "SELECT * FROM `objetos` WHERE 1";
        $result = $this->execQuery($sql);
        if ($result->rowCount() > 0) {
            $rs = $result->fetchAll(PDO::FETCH_CLASS);            
            return $rs;
        }

        return false;
    }
    public function getEntrega($id)
    {
        $sql = "SELECT * FROM `objetos` WHERE id = $id";
        $result = $this->execQuery($sql);
        if ($result->rowCount() > 0) {
            $rs = $result->fetchAll(PDO::FETCH_CLASS);            
            return $rs;
        }

        return false;
    }
}
