<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
<script src="../js/requestController/requestController.js"></script>
<script src="../js/loaderController/loaderController.js"></script>
<script src="../assets/js/notiflix-3.2.5.min.js"></script>

<?php
$curPage = substr($_SERVER["REQUEST_URI"], strrpos($_SERVER["REQUEST_URI"], "/") + 1);
switch ($curPage) {
    case 'home':
        echo '<script src="../js/home/homeController.js"></script>';
        echo '<script src="../js/home/homeTemplates.js"></script>';
        break;
}
