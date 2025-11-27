export class ListaFormularioQueroDTO{
    constructor(
            readonly ID: string,
            readonly NAME: string,
            readonly TELEFONE: string,
            readonly EMAIL: string,
            readonly VALOR: string,
            readonly CIDADE: string,
            readonly ESTADO: string,
            readonly INSTITUTION_ID?: string
    ){}
}