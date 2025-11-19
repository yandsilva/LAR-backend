import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsUrl,
  IsObject,
  IsNumber,
} from 'class-validator';

export class UpdateInstitutionDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: '(14)9 9999-9999',
    description: 'Telefone de contato da instituição',
  })
  PHONE?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: 'Instituição voltada ao desenvolvimento humano e educacional.',
    description: 'Descrição ou biografia da instituição',
  })
  ABOUT?: string;

  @IsOptional()
  @IsUrl({}, { message: 'Imagem deve ser uma URL válida' })
  @ApiPropertyOptional({
    example: 'https://meuservidor.com/imagens/instituicao-logo.png',
    description: 'Imagem representativa ou logo da instituição',
  })
  IMAGE?: string;

  @IsOptional()
  @IsUrl({}, { message: 'URL deve ser válida' })
  @ApiPropertyOptional({
    example: 'https://institutolumina.org',
    description: 'Site oficial ou página principal da instituição',
  })
  URL?: string;
}
