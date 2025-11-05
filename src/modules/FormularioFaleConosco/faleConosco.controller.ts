import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FaleConoscoEntity } from "./faleConosco.Entity";
import { CreateFormDto3 } from "./dto/create-form-dto";
import { FormularioArmazenados } from "./faleConosco.dm";
import {v4 as uuid} from 'uuid';
import { RetornoPadraoDTO } from "../dto/retorno.dto";
import { ListaFormularioFaleConoscoDTO } from "./dto/listaFormularioFaleConosco.dto";

@Controller('/FormularioFaleConosco')
@ApiTags('FormularioFaleConosco')
export class faleConoscoController {
    constructor(private Formulario : FormularioArmazenados){

    }

    @Post()
        async criaUsuario(@Body() dadosForumlario: CreateFormDto3): Promise<RetornoPadraoDTO> {
        try {
            const novoFormulario = new FaleConoscoEntity(
                uuid(),
                dadosForumlario.name,
                dadosForumlario.telefone,
                dadosForumlario.email,
                dadosForumlario.endereco,
                dadosForumlario.assunto,
                dadosForumlario.mensagem
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
        async retornaUsuario(): Promise<ListaFormularioFaleConoscoDTO[]> {
            const formularioListados = this.Formulario.Formulario;

            const ListaRetorno = formularioListados.map(usuario => 
                new ListaFormularioFaleConoscoDTO(
                    usuario.id,
                    usuario.name,
                    usuario.telefone,
                    usuario.email,
                    usuario.endereco,
                    usuario.assunto,
                    usuario.mensagem
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