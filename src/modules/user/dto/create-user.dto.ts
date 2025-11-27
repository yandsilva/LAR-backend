import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'John Doe', description: 'Nome do usuario' })
  NOME: string;

  @IsEmail()
  @ApiProperty({ example: 'yan@gmail.com', description: 'Email do usuario' })
  EMAIL: string;

  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({ example: '123456', description: 'Senha do usuario' })
  PASSWORD: string;
}
