<?php

session_start();
DEFINE("ID_USER", $_SESSION['id_user']);
DEFINE("USER", $_SESSION['user']);

// if (ID_USER) {
//     echo json_encode([ID_USER, USER]);   
//     return; 
// }
// echo json_encode(false);
