import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { CreateInstitutionDto } from 'src/modules/institution/dto/create-institution.dto';
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

  @Get('get-all')
  async getAll() {
    return this.institutionService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const institution = await this.institutionService.findById(id);
    if (!institution) {
      return { error: 'Instituição não encontrada' };
    }

    const { PASSWORD, ...result } = institution;
    return result;
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

  @Put('change-password')
  @UseGuards(JwtAuthGuard)
  async changePassword(
    @Req() req,
    @Body()
    body: {
      currentPassword: string;
      newPassword: string;
      confirmNewPassword: string;
    },
  ) {
    return this.institutionService.handlePasswordReset(req.user.ID, body);
  }
}
