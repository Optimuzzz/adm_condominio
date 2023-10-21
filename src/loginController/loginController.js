const loginController = (() => {

    const init = () => {
        $('#year').text(moment().year());
        $('#btn_login').click(() => {
            getLogin();
        });
       
    }
    const getLogin = async () => {

        let params = {
            login: $("#login").val(),
            senha: $("#senha").val(),
        };
        let url = "application/controller/loginController";
        $('#btn_login').attr('disabled', true);

        RequestController.request(url, params, 'POST').then((res) => {           

            if (res.status == 200) {
                location.replace("home");
                return;
            }

            Notiflix.Notify.failure('Login e senha incorretos');

            setTimeout(() => {
                $('#btn_login').attr('disabled', false);
            }, 2000);
            LoaderController.hide();
        });
    }
    

    init();

})();

$(document).ready(()=>{LoaderController.loader()})