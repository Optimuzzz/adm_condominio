const EntregasController = (() => {

    const getListEntregas = () => {

        let params = {
            getListEntregas: 1
        };

        let url = "application/controller/entregasController";

        RequestController.request(url, params).then((res) => {

            let li = '';
            res.data.map((e) => {
                li += `<li class="list-group-item list-group-item-action" id="${e.id}" onclick="EntregasController.getEntrega(${e.id})" > bloco - ${e.bloco} | apt - ${e.apt}</li>`;
            });

            $('#list_entregas').html(li)
        })

      
        LoaderController.hide();
    }

    const getEntrega = (id) => {

        let params = {
            getEntrega: id
        };

        let url = "application/controller/entregasController";

        RequestController.request(url, params).then((res) => {
            $('#modal_entrega').remove();
            $('body').append(EntregasTemplates.modalEntrega(res.data[0]));
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

    return {
        getListEntregas,
        getEntrega
    }
})();

$(document).ready(() => { LoaderController.loader() })