import {
  Body,
  ConflictException,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ErrorHandleDto } from 'src/common/errors/error.util';
import { CreateInstitutionDto } from 'src/modules/institution/dto/create-institution.dto';
import { InstitutionService } from 'src/modules/institution/institution.service';

@Controller('institution')
@ApiTags('institution')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Post()
  async create(
    @Body() createInstitutionDto: CreateInstitutionDto,
  ): Promise<ErrorHandleDto> {
    try {
      return new ErrorHandleDto(
        'Instituição criada com sucesso',
        this.institutionService.create(createInstitutionDto),
      );
    } catch (error) {
      if (error.message === 'Instituição já existe') {
        throw new ConflictException('Usuário já existe');
      }
      throw new InternalServerErrorException('Erro inesperado do servidor');
    }
  }

  @Get()
  findAll() {
    return this.institutionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institutionService.findOne(+id);
  }
}
