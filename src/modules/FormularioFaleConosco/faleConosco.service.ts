import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RetornoPadraoDTO } from '../dto/retorno.dto';
import { v4 as uuid } from 'uuid';
import { FaleConosco } from './faleConosco.Entity';
import { CreateFormDto3 } from './dto/create-form-dto';

@Injectable()
export class FaleConoscoService {
  constructor(
    @Inject('FALECONOSCO_REPOSITORY')
    private faleConoscoRepository: Repository<FaleConosco>,
  ) {}

  async listar(): Promise<FaleConosco[]> {
    return this.faleConoscoRepository.find();
  }

  async enviar(dados: CreateFormDto3): Promise<RetornoPadraoDTO> {
    let formAjuda = new FaleConosco();
    formAjuda.ID = uuid();
    formAjuda.NAME = dados.NAME;
    formAjuda.TELEFONE = dados.TELEFONE;
    formAjuda.EMAIL = dados.EMAIL;
    formAjuda.ENDERECO = dados.ENDERECO;
    formAjuda.ASSUNTO = dados.ASSUNTO;
    formAjuda.MENSAGEM = dados.MENSAGEM;

    return this.faleConoscoRepository
      .save(formAjuda)
      .then((result) => {
        return <RetornoPadraoDTO>{
          data: result.ID,
          message: 'Formulario enviado com sucesso!',
        };
      })
      .catch((error) => {
        throw new Error('Erro ao enviar formulario: ' + error.message);
      });
  }

  async localizaID(id: string): Promise<FaleConosco> {
    const formAjuda = await this.faleConoscoRepository.findOne({
      where: { ID: id },
    });
    if (!formAjuda) {
      throw new Error('Formulario não encontrado!');
    }
    return formAjuda;
  }

  async remover(id: string): Promise<RetornoPadraoDTO> {
    const formAjuda = await this.localizaID(id);

    return this.faleConoscoRepository
      .remove(formAjuda)
      .then((result) => {
        return <RetornoPadraoDTO>{
          data: formAjuda.ID,
          message: 'Formulário excluido com sucesso!',
        };
      })
      .catch((error) => {
        throw new Error('Erro ao excluido formulário: ' + error.message);
      });
  }
}
