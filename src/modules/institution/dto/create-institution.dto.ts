import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsUrl,
  IsObject,
} from 'class-validator';

export class CreateInstitutionDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Instituto Lumina',
    description: 'Nome da instituição',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'contato@institutolumina.org',
    description: 'Email da instituição (único)',
  })
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    example: '123456',
    description: 'Senha de acesso da instituição',
  })
  password: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: '(14) 99876-5432',
    description: 'Telefone de contato da instituição',
  })
  phone?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: 'Instituição voltada ao desenvolvimento humano e educacional.',
    description: 'Descrição ou biografia da instituição',
  })
  about?: string;

  @IsOptional()
  @IsUrl({}, { message: 'Imagem deve ser uma URL válida' })
  @ApiPropertyOptional({
    example: 'https://meuservidor.com/imagens/instituicao-logo.png',
    description: 'Imagem representativa ou logo da instituição',
  })
  image?: string;

  @IsOptional()
  @IsUrl({}, { message: 'URL deve ser válida' })
  @ApiPropertyOptional({
    example: 'https://institutolumina.org',
    description: 'Site oficial ou página principal da instituição',
  })
  url?: string;

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
  socialLinks?: Record<string, string>;
}
