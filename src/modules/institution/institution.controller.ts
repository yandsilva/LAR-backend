import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { institutionUploadConfig } from 'src/common/multer/multer';
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

  @Put('update-profile')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('IMAGE', institutionUploadConfig))
  async update(
    @Req() req,
    @Body() dto: UpdateInstitutionDto,
    @UploadedFile() IMAGE?: Express.Multer.File,
  ) {
    const userId = req.user.ID;
    if (IMAGE) {
      dto.IMAGE = `/uploads/institutions/images/${IMAGE.filename}`;
    }
    const updated = await this.institutionService.update(userId, dto);

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
      confirmPassword: string;
    },
  ) {
    return this.institutionService.handlePasswordReset(req.user.ID, body);
  }
}
