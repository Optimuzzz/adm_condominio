const loginController = () => {

    const init = () => {
       $('#year').text(moment().year());

       getForm();
    }
const getForm = () =>{
    $('#btn_login').click(()=>{

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
            console.log(data);
        });
          
          
    });
    

}

init();

}



loginController();