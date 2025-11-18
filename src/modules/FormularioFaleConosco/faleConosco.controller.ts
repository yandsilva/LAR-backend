import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateFormDto3 } from "./dto/create-form-dto";
import { RetornoPadraoDTO } from "../dto/retorno.dto";
import { ListaFormularioFaleConoscoDTO } from "./dto/listaFormularioFaleConosco.dto";
import { FaleConoscoService } from "./faleConosco.service";

@Controller('/FormularioFaleConosco')
@ApiTags('FormularioFaleConosco')
export class faleConoscoController {
    constructor(private readonly FaleConoscoService: FaleConoscoService){}

    @Post()
        async criaUsuario(@Body() dadosForumlario: CreateFormDto3): Promise<RetornoPadraoDTO> {
        var retorno = await this.FaleConoscoService.enviar(dadosForumlario);   
        return retorno  
    }
        
    @Get()
        async retornaUsuario(): Promise<ListaFormularioFaleConoscoDTO[]> {
        var retorno = await this.FaleConoscoService.listar();   
        return retorno
    }
        
        
    @Delete('/:id')
        async removeFormulario(@Param('id') id: string) {
        var retorno = await this.FaleConoscoService.remover(id);   
        return retorno
    }

}