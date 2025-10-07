import { Body, Controller, InternalServerErrorException, NotFoundException, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {v4 as uuid} from 'uuid';
import { RetornoPadraoDTO } from "../dto/retorno.dto";
import { QueroAjudaEntity } from "./queroAjudar.Entity";
import { FormularioArmazenadosAjudar } from "./queroAjudar.dm";
import { CreateFormDto } from "../FormularioPrecisoAjuda/dto/create-form.dto";

@Controller('/FormularioQueroAjudar')
@ApiTags('FormularioQueroAjudar')
export class QueroAjudarController {
    constructor(private Formulario : FormularioArmazenadosAjudar){

    }

    @Post()
    async criaUsuario(@Body() dadosUsuario: CreateFormDto): Promise <RetornoPadraoDTO> {
        try{
        var novoFormulario = new QueroAjudaEntity(uuid(),novoFormulario.nome, novoFormulario.telefone, novoFormulario.email, novoFormulario.assunto, novoFormulario.instituicao,
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