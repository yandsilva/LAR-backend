import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class LoginInstitutionDto {
  @IsNumber()
  @IsOptional()
  ID?: string;

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
}
