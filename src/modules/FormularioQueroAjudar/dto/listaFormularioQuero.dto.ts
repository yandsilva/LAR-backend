export class ListaFormularioQueroDTO{
    constructor(
            readonly id: string,
            readonly name: string,
            readonly telefone: string,
            readonly email: string,
            readonly valor: string,
            readonly instituicao: string,
            readonly cidade: string,
            readonly estado: string
    ){}
}