import { Body, Controller, Delete, Get, InternalServerErrorException, NotFoundException, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateFormDto } from "./dto/create-form.dto";
import {v4 as uuid} from 'uuid';
import { RetornoPadraoDTO } from "../dto/retorno.dto";
import { ListaFormularioPrecisoDTO } from "./dto/listaFormularioPreciso.dto";
import { PrecisoAjudaService } from "./precisoAjuda.service";

@Controller('/FormularioPrecisoAjuda')
@ApiTags('FormularioPrecisoAjuda')
export class PrecisoAjudaController {
    constructor(private readonly PrecisoAjudaService: PrecisoAjudaService){}

    @Post()
            async criaUsuario(@Body() dadosForumlario: CreateFormDto): Promise<RetornoPadraoDTO> {
            // console.log(dadosForumlario);
                var retorno = await this.PrecisoAjudaService.enviar(dadosForumlario);   
            return retorno  
        }
    
    @Get()
            async retornaUsuario(): Promise<ListaFormularioPrecisoDTO[]> {
            var retorno = await this.PrecisoAjudaService.listar();   
            return retorno
        }
    
    
    @Delete('/:id')
            async removeFormulario(@Param('id') id: string) {
            var retorno = await this.PrecisoAjudaService.remover(id);   
            return retorno
        }

}