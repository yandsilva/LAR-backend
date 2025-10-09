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

export class LoginInstitutionDto {
  @IsNumber()
  @IsOptional()
  id?: number;

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
}
