const main = (function () {

    const home = () => {
        console.log('home')
    }

    const moradores = () => {
        console.log('moradores')
    }

    const lista_entregas = () => {
        console.log('skills')
        EntregasController.getListEntregas();
    }

    const historico = () => {
        console.log('historico')
    }

    const receber_encomenda = () => {
        console.log('receber_encomenda')
    }


    const callFunc = (e) => {
        switch (e.currentTarget.id) {
            case '#moradores':
                moradores();
                break;
            case '#lista_entregas':
                lista_entregas();
                break;
            case '#historico':
                historico();
                break;
            case '#receber_encomenda':
                receber_encomenda();
                break;
            default:
                home();
                break;
        }
    }

    $(".nav__item a").click(function (e) {
        $('.nav__link').removeClass('active-link');
        $('section').css('display', 'none');
        $(this).toggleClass("active-link");
        $('section' + e.currentTarget.id).css('display', 'block');

        callFunc(e);
    });

    setTimeout(() => {
        $("a[title='Hosted on free web hosting 000webhost.com. Host your own website for FREE.']").css('display', 'none');
    }, 1500);

})();

$(document).ready(async () => {

    Notiflix.Notify.init({
        timeout: 2000,
    });
    
    
})