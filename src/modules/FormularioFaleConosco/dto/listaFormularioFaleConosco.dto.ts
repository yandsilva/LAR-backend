export class ListaFormularioFaleConoscoDTO{
    constructor(
            readonly id: string,
            readonly name: string,
            readonly telefone: string,
            readonly email: string,
            readonly endereco: string,
            readonly assunto: string,
            readonly mensagem: string
    ){}
}