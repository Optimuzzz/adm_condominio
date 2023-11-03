<?php
require_once '../db_config/db_config.php';
require_once '../constants/constants.php';

class PerfilModel extends DbConfig
{
    public function getDadosUser()
    {
        $sql = "SELECT u.id, u.name, u.id_address, a.logradouro, a.numero, a.bairro, a.cidade, a.estado, a.cep, a.complemento, u.telefone_1, u.telefone_2
                FROM user u
                LEFT JOIN address a ON a.id = u.id_address
                WHERE u.id = ?  ";

        $result = $this->execQuery($sql, [ID_USER]);

        if ($result->rowCount() > 0) {
            return $result->fetch(PDO::FETCH_ASSOC);
        }

        return false;
    }

    public function postDadosUser($dados)
    {
        $params = [
            $dados['telefone_1'],
            $dados['telefone_2'],
            $dados['logradouro'],
            $dados['cidade'],
            $dados['estado'],
            $dados['cep'],
            $dados['bairro'],
            $dados['complemento'],            
            ID_USER,
        ];

        $sql = " UPDATE address a 
                 INNER JOIN
                 user u ON a.id = u.id
                 SET    `telefone_1` = ?,
                        `telefone_2` = ?, 
                        `logradouro` = ? ,
                        `cidade` = ? , 
                        `estado` = ?,
                        `cep` = ? , 
                        `bairro` = ? ,
                        `complemento` = ?                
                 WHERE a.id = ?  ";

        $result = $this->execQuery($sql, $params, true);

        if ($result->rowCount()) {
            return true;
        }

        $this->closeConn();
        return false;
    }
}
