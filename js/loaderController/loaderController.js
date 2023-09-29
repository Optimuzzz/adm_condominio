const LoaderController = (() => {
    const loader = ()=>{
        $('.overlay').removeClass('d-none')
        setTimeout(() => {
            $('.overlay').addClass('d-none')
        }, 1500);
    }
    const show = ()=>{
        $('.overlay').removeClass('d-none')
    }
    const hide = ()=>{       
        $('.overlay').addClass('d-none');
    }
    
    return {
        loader,
        show,
        hide
    }

})();