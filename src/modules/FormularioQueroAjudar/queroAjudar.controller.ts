import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RetornoPadraoDTO } from "../dto/retorno.dto";
import { CreateFormDto2 } from "./dto/create-form-ajudar.dto";
import { ListaFormularioQueroDTO } from "./dto/listaFormularioQuero.dto";
import { QueroAjudarService } from "./queroAjudar.service";

@Controller('/FormularioQueroAjudar')
@ApiTags('FormularioQueroAjudar')
export class QueroAjudarController {
    constructor(private readonly QueroAjudarService: QueroAjudarService){}

   @Post()
        async criaUsuario(@Body() dadosForumlario: CreateFormDto2): Promise<RetornoPadraoDTO> {
        var retorno = await this.QueroAjudarService.enviar(dadosForumlario);   
        return retorno  
    }

    @Get()
        async retornaUsuario(): Promise<ListaFormularioQueroDTO[]> {
        var retorno = await this.QueroAjudarService.listar();   
        return retorno
    }


    @Delete('/:id')
        async removeFormulario(@Param('id') id: string) {
        var retorno = await this.QueroAjudarService.remover(id);   
        return retorno
    }

}