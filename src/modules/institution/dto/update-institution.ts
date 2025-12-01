import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsUrl } from 'class-validator';

export class UpdateInstitutionDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: '(14)9 9999-9999',
    description: 'Telefone de contato da instituição',
  })
  EMPRESA?: string;

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
  @ApiPropertyOptional({
    example: 'https://meuservidor.com/imagens/instituicao-logo.png',
    description: 'Imagem representativa ou logo da instituição',
  })
  IMAGE?: string;

  @IsOptional()
  @ApiPropertyOptional({
    example: 'https://institutolumina.org',
    description: 'Site oficial ou página principal da instituição',
  })
  FACEBOOK?: string;

  @IsOptional()
  @ApiPropertyOptional({
    example: 'https://institutolumina.org',
    description: 'Site oficial ou página principal da instituição',
  })
  INSTAGRAM?: string;

  @IsOptional()
  @ApiPropertyOptional({
    example: 'https://institutolumina.org',
    description: 'Site oficial ou página principal da instituição',
  })
  LINKEDIN?: string;
}
