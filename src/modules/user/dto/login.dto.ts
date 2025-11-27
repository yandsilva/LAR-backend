import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {

  @IsEmail()
  @ApiProperty({ example: 'yan@gmail.com', description: 'Email do usuario' })
  EMAIL: string;

  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({ example: '123456', description: 'Senha do usuario' })
  PASSWORD: string;
}
