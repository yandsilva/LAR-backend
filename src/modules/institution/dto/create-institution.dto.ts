import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsUrl,
  IsObject,
  IsNumber,
} from 'class-validator';

export class CreateInstitutionDto {
  @IsNumber()
  @IsOptional()
  ID?: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Instituto Lumina',
    description: 'Nome da instituição',
  })
  EMPRESA: string;

  @IsEmail()
  @ApiProperty({
    example: 'contato@institutolumina.org',
    description: 'Email da instituição (único)',
  })
  EMAIL: string;

  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    example: '123456',
    description: 'Senha de acesso da instituição',
  })
  PASSWORD: string;

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

  @IsOptional()
  @IsObject()
  @ApiPropertyOptional({
    example: {
      instagram: 'https://instagram.com/instituto.lumina',
      facebook: 'https://facebook.com/instituto.lumina',
      linkedin: 'https://linkedin.com/company/instituto-lumina',
    },
    description:
      'Links das redes sociais da instituição (armazenados como JSON)',
  })
  SOCIALLINKS?: Record<string, string>;
}
