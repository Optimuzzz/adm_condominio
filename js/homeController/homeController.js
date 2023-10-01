const HomeController = (() => {

    const init = ()=>{
        getListEntregas()
    }    

    const getListEntregas = () => {

        let params = {
            getListEntregas: 1
        };

        let url = "../application/controller/homeController";

        RequestController.request(url, params).then((res) => {
            console.log(res)
        })
    }

    init();
})();

$(document).ready(()=>{LoaderController.loader()})