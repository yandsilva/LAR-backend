import * as bcrypt from "bcrypt"

export class FaleConoscoEntity{
    id: string;
    name: string;
    telefone: string;
    email: string;
    endereco: string;
    assunto: string;
    mensagem: string;



    constructor(id: string, name: string, telefone: string, email: string, endereco: string, assunto: string, mensagem: string
    ) {
        this.id = id;
        this.name = name;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
        this.assunto = assunto;
        this.mensagem = mensagem;

    }
    
}