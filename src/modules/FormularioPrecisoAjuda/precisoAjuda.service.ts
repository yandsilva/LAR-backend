import { Inject, Injectable } from '@nestjs/common';
import { PRECISOAJUDA } from './precisoAjuda.Entity';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { RetornoPadraoDTO } from '../dto/retorno.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PrecisoAjudaService {
  constructor(
    @Inject('PRECISOAJUDA_REPOSITORY')
    private precisoAjudaRepository: Repository<PRECISOAJUDA>,
  ) {}

  async listar(): Promise<PRECISOAJUDA[]> {
    return this.precisoAjudaRepository.find();
  }

  async enviar(dados: CreateFormDto): Promise<RetornoPadraoDTO> {
    let formAjuda = new PRECISOAJUDA();
    formAjuda.ID = uuid();
    formAjuda.NAME = dados.NAME;
    formAjuda.TELEFONE = dados.TELEFONE;
    formAjuda.EMAIL = dados.EMAIL;
    formAjuda.ASSUNTO = dados.ASSUNTO;
    formAjuda.CIDADE = dados.CIDADE;
    formAjuda.ESTADO = dados.ESTADO;
    formAjuda.TREMOR = dados.TREMOR;
    formAjuda.CANSACO = dados.CANSACO;
    formAjuda.DESANIMO = dados.DESANIMO;
    formAjuda.FALTAAR = dados.FALTAAR;
    formAjuda.AGONIA = dados.AGONIA;
    formAjuda.FALTAFOCO = dados.FALTAFOCO;
    formAjuda.ALTERACAOHUMOR = dados.ALTERACAOHUMOR;
    formAjuda.SENSACAOCONEXAO = dados.SENSACAOCONEXAO;
    formAjuda.PREOCUPACAOPESO = dados.PREOCUPACAOPESO;
    formAjuda.PERDAINTERESSE = dados.PERDAINTERESSE;
    formAjuda.ABUSOPSICOLOGICO = dados.ABUSOPSICOLOGICO;
    formAjuda.ABUSOFISICO = dados.ABUSOFISICO;
    formAjuda.ABUSOSEXUAL = dados.ABUSOSEXUAL;
    formAjuda.ABUSOPATRIMONIAL = dados.ABUSOPATRIMONIAL;
    formAjuda.ABUSOMORAL = dados.ABUSOMORAL;
    formAjuda.INSTITUICAO = dados.INSTITUTION_ID
      ? ({ ID: dados.INSTITUTION_ID } as any)
      : null;

    return this.precisoAjudaRepository
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

  async localizaID(id: string): Promise<PRECISOAJUDA> {
    const formAjuda = await this.precisoAjudaRepository.findOne({
      where: { ID: id },
    });
    if (!formAjuda) {
      throw new Error('Formulario não encontrado!');
    }
    return formAjuda;
  }

  async remover(id: string): Promise<RetornoPadraoDTO> {
    const formAjuda = await this.localizaID(id);

    return this.precisoAjudaRepository
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
