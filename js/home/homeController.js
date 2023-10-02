const HomeController = (() => {

    const init = () => {
        getListEntregas()
    }

    const getListEntregas = () => {

        let params = {
            getListEntregas: 1
        };

        let url = "../application/controller/homeController";

        RequestController.request(url, params).then((res) => {

            let li = '';
            res.map((e) => {
                li += `<li class="list-group-item list-group-item-action" id="${e.id}"> bloco - ${e.bloco} | apt - ${e.apt}</li>`;
            });

            $('#list_entregas').html(li)
        })

        $('#list_entregas, li').click((e) => {
            if (!e.target.id) return;
            getEntrega(e.target.id);
        });
        LoaderController.hide();
    }

    const getEntrega = (id) => {

        let params = {
            getEntrega: id
        };

        let url = "../application/controller/homeController";

        RequestController.request(url, params).then((res) => {
            $('#modal_entrega').remove();
            $('body').append(homeTemplates.modalEntrega(res[0]));
            $('#modal_entrega').modal('show');

            let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
            vh = (60 * vh) / 100;
            $('.sign').css('min-height', vh + 'px');
            
            $('#btn-sign').one('click',() => {
                
                $('.modal').animate({
                    scrollTop: 200
                }, 800);
                
                Notiflix.Notify.info('Coletar assinatura');
            });

            LoaderController.hide();
        })

    }

    init();
})();

$(document).ready(() => { LoaderController.loader() })