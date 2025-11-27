import { Inject, Injectable } from "@nestjs/common";
import { QUEROAJUDAR } from "./queroAjudar.Entity";
import { Repository } from "typeorm";
import { CreateFormDto2 } from "./dto/create-form-ajudar.dto";
import { RetornoPadraoDTO } from "../dto/retorno.dto";
import {v4 as uuid} from 'uuid';

@Injectable()
export class QueroAjudarService{
    constructor(
        @Inject('QUEROAJUDAR_REPOSITORY')
        private queroAjudarRepository: Repository<QUEROAJUDAR>,
    ){}

    async listar(): Promise<QUEROAJUDAR[]>{
        return this.queroAjudarRepository.find();
    }

    async enviar(dados: CreateFormDto2): Promise<RetornoPadraoDTO>{
        let formAjudar = new QUEROAJUDAR();
        formAjudar.ID = uuid();
        formAjudar.NAME = dados.NAME;
        formAjudar.TELEFONE = dados.TELEFONE;
        formAjudar.EMAIL = dados.EMAIL;
        formAjudar.VALOR = dados.VALOR;
        formAjudar.CIDADE = dados.CIDADE;
        formAjudar.ESTADO = dados.ESTADO;
        formAjudar.INSTITUICAO = dados.INSTITUTION_ID ? { ID: dados.INSTITUTION_ID } as any : null;

        return this.queroAjudarRepository.save(formAjudar)
        .then((result) => {
            return <RetornoPadraoDTO>{
                data: result.ID,
                message: 'Formulario enviado com sucesso!'
        };
    })
    .catch((error) => {
        throw new Error('Erro ao enviar formulario: ' + error.message);
    });
    }

    async localizaID(id: string): Promise<QUEROAJUDAR>{
            const formAjudar = await this.queroAjudarRepository.findOne({
                where: {ID: id},
            });
            if (!formAjudar){
                throw new Error('Formulario não encontrado!');
            }
            return formAjudar
        }

    async remover(id: string): Promise<RetornoPadraoDTO>{
        const formAjudar = await this.localizaID(id);

        return this.queroAjudarRepository.remove(formAjudar)
        .then((result) => {
            return <RetornoPadraoDTO>{
                data: formAjudar.ID,
                message: 'Formulário excluido com sucesso!'
        };
    })
    .catch((error) => {
        throw new Error('Erro ao excluido formulário: ' + error.message);
    });
    }
}