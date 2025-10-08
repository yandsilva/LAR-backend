import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {v4 as uuid} from 'uuid';
import { RetornoPadraoDTO } from "../dto/retorno.dto";
import { QueroAjudaEntity } from "./queroAjudar.Entity";
import { FormularioArmazenadosAjudar } from "./queroAjudar.dm";
import { CreateFormDto } from "../FormularioPrecisoAjuda/dto/create-form.dto";
import { ListaFormularioQueroDTO } from "./dto/listaFormularioQuero.dto";

@Controller('/FormularioQueroAjudar')
@ApiTags('FormularioQueroAjudar')
export class QueroAjudarController {
    constructor(private Formulario : FormularioArmazenadosAjudar){

    }

   @Post()
          async criaUsuario(@Body() dadosForumlario: CreateFormDto): Promise<RetornoPadraoDTO> {
      try {
          const novoFormulario = new QueroAjudaEntity(
              uuid(),
              dadosForumlario.name,
              dadosForumlario.telefone,
              dadosForumlario.email,
              dadosForumlario.assunto,
              dadosForumlario.instituicao,
              dadosForumlario.cidade,
              dadosForumlario.estado
          );
  
          this.Formulario.AdicionarFormulario(novoFormulario);
  
          const retorno = new RetornoPadraoDTO(
              'Formulario enviado com sucesso!',
              novoFormulario
          );
          return retorno;
      } catch (error) {
          if (error.message === 'Usuário não encontrado') {
              throw new NotFoundException(`Usuário não encontrado`);
          }
          throw new InternalServerErrorException('Erro inesperado no servidor');
      }
  }



  @Get()
          async retornaUsuario(): Promise<ListaFormularioQueroDTO[]> {
              const formularioListados = this.Formulario.Formulario;
  
              const ListaRetorno = formularioListados.map(usuario => 
                  new ListaFormularioQueroDTO(
                      usuario.id,
                      usuario.name,
                      usuario.telefone,
                      usuario.email,
                      usuario.assunto,
                      usuario.instituicao,
                      usuario.cidade,
                      usuario.estado
                  )
              );
  
              return ListaRetorno;
          }


          @Delete('/:id')
            async removeFormulario(@Param('id') id: string) {
                try {
                const formularioRemovido = await this.Formulario.removeFormulario(id);
                return new RetornoPadraoDTO(     
                    'Usuário removido com sucesso',
                    formularioRemovido
                );
                } catch (error) {
                    if(error.message === 'Usuário não encontrado'){
                        throw new NotFoundException(`Usuário com id ${id} não encontrado`);
                    }
                    throw new InternalServerErrorException('Erro inesperado no servidor');

                }
            }

}