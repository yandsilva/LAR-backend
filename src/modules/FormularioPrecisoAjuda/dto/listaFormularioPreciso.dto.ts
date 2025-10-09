export class ListaFormularioPrecisoDTO{
    constructor(
            readonly id: string,
            readonly name: string,
            readonly telefone: string,
            readonly email: string,
            readonly assunto: string,
            readonly instituicao: string,
            readonly cidade: string,
            readonly estado: string
    ){}
}