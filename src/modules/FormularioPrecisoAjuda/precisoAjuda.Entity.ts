import * as bcrypt from "bcrypt"

export class PrecisoAjudaEntity{
    id: string;
    nome: string;
    telefone: string;
    email: string;
    assunto: string;
    instituicao: string;
    cidade: string;
    estado: string;


    constructor(id: string, nome: string, telefone: string, email: string, assunto: string, instituicao: string, cidade: string,
                estado: string
    ) {
    
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.assunto = assunto;
        this.instituicao = instituicao;
        this.cidade = cidade;
        this.estado = estado;
    }
    
}