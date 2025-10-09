import * as bcrypt from "bcrypt"

export class QueroAjudaEntity{
    id: string;
    name: string;
    telefone: string;
    email: string;
    assunto: string;
    instituicao: string;
    cidade: string;
    estado: string;


    constructor(id: string, name: string, telefone: string, email: string, assunto: string, instituicao: string, cidade: string,
                estado: string
    ) {
    
        this.id = id;
        this.name = name;
        this.telefone = telefone;
        this.email = email;
        this.assunto = assunto;
        this.instituicao = instituicao;
        this.cidade = cidade;
        this.estado = estado;
    }
    
}