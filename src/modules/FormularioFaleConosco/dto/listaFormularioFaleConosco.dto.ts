export class ListaFormularioFaleConoscoDTO{
    constructor(
            readonly ID: string,
            readonly NAME: string,
            readonly TELEFONE: string,
            readonly EMAIL: string,
            readonly ASSUNTO: string,
            readonly ENDERECO: string,
            readonly MENSAGEM: string
    ){}
}