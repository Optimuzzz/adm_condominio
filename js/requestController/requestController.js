const RequestController = (() => {
    
    let request = async (url, params, method = 'GET') => {
        LoaderController.show();
        let res;
        params = params ? params : undefined;
        try {
             res = await $.ajax({
                url: url,
                type: method,
                data: params,
                dataType: "json",
            });
            return res;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        request
    }

})();