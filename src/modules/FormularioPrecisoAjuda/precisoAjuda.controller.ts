import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PrecisoAjudaEntity } from "./precisoAjuda.Entity";
import { CreateFormDto } from "./dto/create-form.dto";
import { FormularioArmazenados } from "./precisoAjuda.dm";
import {v4 as uuid} from 'uuid';
import { RetornoPadraoDTO } from "../dto/retorno.dto";
import { ListaFormularioPrecisoDTO } from "./dto/listaFormularioPreciso.dto";

@Controller('/FormularioPrecisoAjuda')
@ApiTags('FormularioPrecisoAjuda')
export class PrecisoAjudaController {
    constructor(private Formulario : FormularioArmazenados){

    }

    @Post()
        async criaUsuario(@Body() dadosForumlario: CreateFormDto): Promise<RetornoPadraoDTO> {
        try {
            const novoFormulario = new PrecisoAjudaEntity(
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
        async retornaUsuario(): Promise<ListaFormularioPrecisoDTO[]> {
            const formularioListados = this.Formulario.Formulario;

            const ListaRetorno = formularioListados.map(usuario => 
                new ListaFormularioPrecisoDTO(
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