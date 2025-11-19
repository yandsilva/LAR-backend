import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateInstitutionDto } from 'src/modules/institution/dto/create-institution.dto';
import { LoginInstitutionDto } from 'src/modules/institution/dto/login-institution.dto';
import { UpdateInstitutionDto } from 'src/modules/institution/dto/update-institution';
import { InstitutionService } from 'src/modules/institution/institution.service';

@Controller('institution')
@ApiTags('institution')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Post('sign-up')
  async create(@Body() createInstitutionDto: CreateInstitutionDto) {
    return await this.institutionService.registerInstitution(
      createInstitutionDto,
    );
  }

  @Post('sign-in')
  async signIn(@Body() dto: LoginInstitutionDto) {
    const institution = await this.institutionService.findByEmail(dto);

    return {
      success: true,
      message: 'Instituição encontrada com sucesso.',
      data: institution,
    };
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateInstitutionDto) {
    console.log(id, dto);
    const updated = await this.institutionService.update(id, dto);

    return {
      success: true,
      message: 'Instituição atualizada com sucesso.',
      data: updated,
    };
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.institutionService.findOne(+id);
  // }

  // @Put(':id')
  // updateOne(
  //   @Param('id') id: number,
  //   @Body() updateInstitutionDto: UpdateInstitutionDto,
  // ) {
  //   try {
  //     return new ErrorHandleDto(
  //       'Instituição atualizada com sucesso',
  //       this.institutionService.updateOne(id, updateInstitutionDto),
  //     );
  //   } catch (error) {
  //     throw new InternalServerErrorException('Erro inesperado do servidor');
  //   }
  // }

  // @Delete(':id')
  // deleteOne(@Param('id') id: number) {
  //   try {
  //     return new ErrorHandleDto(
  //       'Instituição deletada com sucesso',
  //       this.institutionService.deleteOne(id),
  //     );
  //   } catch (error) {
  //     throw new InternalServerErrorException('Erro inesperado do servidor');
  //   }
  // }
}
