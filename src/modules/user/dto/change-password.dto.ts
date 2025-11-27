import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  CURRENTPASSWORD: string;
  
  @IsString()
  NEWPASSWORD: string;
  
  @IsString()
  CONFIRMNEWPASSWORD: string;
}