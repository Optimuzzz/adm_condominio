<?php

abstract class DbConfig {

    protected $con;
    protected $host = 'localhost';
    protected $dbname = 'banco';
    protected $username = 'root';
    protected $password = '';

    private function openConn() {
        

        if (!$this->con) {

            $pdo = new PDO('mysql:host='.$this->host.';dbname='.$this->dbname.';charset=utf8', $this->username, $this->password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            if($pdo) {
                $this->con = $pdo;
            } else {
                die('error_con');
            }
        }
    }

    protected function closeConn() {
        if ($this->con) {
            $this->con = NULL;
        }
    }

    protected function execQuery($sql, $params, $persist = false) {
        $result = false;
        $this->openConn();

        if ($this->con) {
         
            $result = $this->con->prepare($sql);            
            $result->execute($params);
            // $result->bindParam(':username', $username);  
            

            if (!$persist) {
               $this->closeConn();
            }
        }

        return $result;
    }

    protected function setTransaction($transaction = false) {
        $result = false;

        if ($this->con) {
            $result = $this->con->autocommit($transaction);
        }

        return $result;
    }

    protected function commitConn() {
        if ($this->con) {
            $this->con->commit();
            $this->closeConn();
        }   
    }

    protected function rollbackConn() {
        if ($this->con) {
            $this->con->rollback();
            $this->closeConn();
        }
    }

    protected function getLastId() {
        $result = false;

        if ($this->con && $this->con->insert_id) {
            $result = $this->con->insert_id;
        }

        return $result;
    }
    
    protected function getRows() {
        return  $this->con->rowCount();
    }

    protected function getAffectedRows() {
        return  $this->con->affected_rows;
    }

    protected function getConn(){
        return $this->openConn();
    }   
}
