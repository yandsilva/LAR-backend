import { Body, Controller, InternalServerErrorException, NotFoundException, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PrecisoAjudaEntity } from "./precisoAjuda.Entity";
import { CreateFormDto } from "./dto/create-form.dto";
import { FormularioArmazenados } from "./precisoAjuda.dm";
import {v4 as uuid} from 'uuid';
import { RetornoPadraoDTO } from "../dto/retorno.dto";

@Controller('/FormularioPrecisoAjuda')
@ApiTags('FormularioPrecisoAjuda')
export class PrecisoAjudaController {
    constructor(private Formulario : FormularioArmazenados){

    }

    @Post()
    async criaUsuario(@Body() dadosUsuario: CreateFormDto): Promise <RetornoPadraoDTO> {
        try{
        var novoFormulario = new PrecisoAjudaEntity(uuid(),novoFormulario.nome, novoFormulario.telefone, novoFormulario.email, novoFormulario.assunto, novoFormulario.instituicao,
                                                    novoFormulario.cidade, novoFormulario.estado);


        this.Formulario.AdicionarFormulario(novoFormulario);
        var retorno = new RetornoPadraoDTO( 
            'Formulario enviado com sucesso!',
            novoFormulario
        );
        return retorno;
        }catch (error) {
             if (error.message === 'Usuário não encontrado'){
                        throw new NotFoundException(`Usuário com id ${novoFormulario.id} não encontrado`);
                    }
                        throw new InternalServerErrorException('Erro inesperado no servidor');
        }
    }


}