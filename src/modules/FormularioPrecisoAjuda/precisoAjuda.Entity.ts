import * as bcrypt from "bcrypt"

export class PrecisoAjudaEntity{
    id: string;
    name: string;
    telefone: string;
    email: string;
    assunto: string;
    instituicao: string;
    cidade: string;
    estado: string;
    tremor: boolean;
    cansaco: boolean;

    constructor(id: string, name: string, telefone: string, email: string, assunto: string, instituicao: string, cidade: string,
                estado: string, tremor: boolean, cansaco: boolean
    ) {
    
        this.id = id;
        this.name = name;
        this.telefone = telefone;
        this.email = email;
        this.assunto = assunto;
        this.instituicao = instituicao;
        this.cidade = cidade;
        this.estado = estado;
        this.tremor = tremor;
        this.cansaco = cansaco;
    }
    
}