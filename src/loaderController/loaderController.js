const LoaderController = (() => {
   
    const loader = ()=>{  
           
        Notiflix.Loading.circle();
            
        setTimeout(() => {
            Notiflix.Loading.remove();
        }, 1500);
    }
    const show = ()=>{
        loader();
    }
    const hide = ()=>{       
        setTimeout(() => {
            Notiflix.Loading.remove();            
        }, 300);
    }
    
    
    return {
        loader,
        show,
        hide
    }
})();