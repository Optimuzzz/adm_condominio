const loginController = () => {

    const init = () => {
        $('#year').text(moment().year());
        $('#btn_login').click(() => {
            getForm();
        });
       
    }
    const getForm = () => {
      

        var formData = {
            login: $("#login").val(),
            senha: $("#senha").val(),
        };


        $.ajax({
            type: "POST",
            url: "application/controller/loginController.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            if(data.status == 200){
                window.location.replace("public/home.php");
            }
            
            

        });

       
    }

    init();

}



loginController();