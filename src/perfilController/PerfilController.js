const PerfilController = (() => {

    const getMenuPerfil = async () => {
        let params = {
            getDadosUser: 1
        };

        let url = "application/controller/perfilController";

        await RequestController.request(url, params).then((res) => {

            $('body').append(PerfilController.modalContaUser(res.data));
            $('#modal_conta_user').modal('show');
            $("#telephone").mask("(99) 99999-9999");
        });


    }

    const updatePerfil = () => {
        $("#form_user").validate({
            ignore: [],
            rules: {
                user: {
                    required: true
                },
                address: {
                    required: true
                },
                telephone: {
                    required: true,
                    minlength: 10,
                },
                city: {
                    required: true
                },
                state: {
                    required: true
                },
                zip: {
                    required: true
                }
            },
            messages: {
                user: {
                    required: "Informe o login",
                },
                address: {
                    required: "Informe o endereço"
                },
                telephone: {
                    required: "Informe o telefone",
                    minlength: "Informe o telefone"
                },
                city: {
                    required: "Informe a cidade"
                },
                state: {
                    required: "Informe o estado"
                },
                zip: {
                    required: "Informe o CEP"
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault();
                event.stopPropagation();
                var json = $(form).formToJson();

                postFormPerfil(json)
            }
        })
    }

    const postFormPerfil = async (json) => {
        console.log(json)
        let params = {
            postDadosUser: json,
        };

        let url = "application/controller/perfilController";

        await RequestController.request(url, params, 'POST').then((res) => {
            if (res.status == 200) {
                Notiflix.Notify.success('Dados atualizados com sucesso');
                setTimeout(() => {
                    $('#modal_conta_user').modal('hide');
                }, 1500);
                return;
            }
            Notiflix.Notify.failure('erro');
        })
    }

    const sair = () => {
        location.replace('/');
    }

    const modalContaUser = (e) => {
        return `<div class="modal fade" id="modal_conta_user" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content" >
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Minha conta</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        <div class="modal-body">
                
                            <form class="row g-3" id="form_user">
                                <div class="col-md-6">
                                    <label for="user" class="form-label">Login</label>
                                    <input type="text" class="form-control" id="user" name="user" value="${e.user}" disabled>
                                </div>

                                <div class="col-12">
                                    <label for="telephone" class="form-label">telefone (WhatsApp)</label>
                                    <input type="text" class="form-control" id="telephone"  name="telephone" value="${e.telephone}">
                                </div>

                                <div class="col-12">
                                    <label for="address" class="form-label">Endereço</label>
                                    <input type="text" class="form-control" id="address"  name="address" value="${e.address}">
                                </div>

                                <div class="col-md-6">
                                    <label for="city" class="form-label">Cidade</label>
                                    <input type="text" class="form-control" id="city" name="city" value="${e.city}">
                                </div>

                                <div class="col-md-4">
                                    <label for="state" class="form-label">Estado</label>
                                    <input type="text" class="form-control" id="state" name="state" value="${e.state}">                                        
                                </div>

                                <div class="col-md-2">
                                    <label for="zip" class="form-label">CEP</label>
                                    <input type="text" class="form-control" id="zip" name="zip" value="${e.zip}">
                                </div>
                               
                                <input type="hidden"  id="id" name="id" value="${e.id}">
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary" onclick="PerfilController.updatePerfil()">Atualizar</button>
                                </div>

                            </form>

                        </div>
                        <div class="modal-footer p-1">
                            <button type="button" class="btn btn-link" data-bs-dismiss="modal">Fechar</button>                                
                        </div>
                        </div>
                    </div>
                </div>`;
    }

    return {
        modalContaUser,
        getMenuPerfil,
        updatePerfil,
        sair
    }
})();