const RequestController = (() => {

    let request = async (url, params, method = 'GET') => {
        LoaderController.show();
        // Notiflix.Loading.pulse();
        let res;
        params = params ? params : undefined;
       
        res = await $.ajax({
            url: url,
            type: method,
            data: params,
            dataType: "json",
        })
        .fail(function (e) {
            console.error(e);
            location.replace("index");
        });        

        return res;
     
    }

    return {
        request
    }

})();