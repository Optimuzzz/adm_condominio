const EntregasTemplates = (function () {

    const modalEntrega = (e) => {  
        return `<div class="modal fade" id="modal_entrega" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Entregar objeto </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Código ${e.codigo}</p>                           
                                <p>Bloco ${e.bloco} - Apt ${e.apt}</p>                           
                                <p>Destinatário ${e.destinatario}</p>
                                <div class="d-flex justify-content-end">
                                    <a class="btn btn-primary" data-bs-toggle="collapse" id="btn-sign" href="#sign" role="button" aria-expanded="false" aria-controls="sign">
                                        <span><i class="fas fa-signature"></i> Fazer entrega</span>
                                    </a>                               
                                </div>
                                <div class="collapse pt-3" id="sign">
                                    <div class="card card-body">
                                        <div class="p-5 sign">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer p-1">
                                <button type="button" class="btn btn-link" data-bs-dismiss="modal">Fechar</button>                                
                            </div>
                            </div>
                        </div>
                    </div>`;

    }
    return {
        modalEntrega
    }
})();