export class ListaFormularioPrecisoDTO{
    constructor(
        readonly ID: string,
        readonly NAME: string,
        readonly TELEFONE: string,
        readonly EMAIL: string,
        readonly ASSUNTO: string,
        readonly INSTITUICAO: string,
        readonly CIDADE: string,
        readonly ESTADO: string,
        readonly TREMOR?: boolean,
        readonly DESANIMO?: boolean,
        readonly CANSACO?: boolean,
        readonly FALTAAR?: boolean,
        readonly AGONIA?: boolean,
        readonly FALTAFOCO?: boolean,
        readonly ALTERACAOHUMOR?: boolean,
        readonly SENSACAOCONEXAO?: boolean,
        readonly PREOCUPACAOPESO?: boolean,
        readonly PERDAINTERESSE?: boolean,
        readonly ABUSOPSICOLOGICO?: boolean,
        readonly ABUSOFISICO?: boolean,
        readonly ABUSOSEXUAL?: boolean,
        readonly ABUSOPATRIMONIAL?: boolean,
        readonly ABUSOMORAL?: boolean
) {}

}