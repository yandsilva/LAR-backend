import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateFormDto2 {

       @IsString()
       @IsNotEmpty({message: 'O nome não pode ser vazio'})
       @ApiProperty({ example: 'John Doe', description: 'Nome do usuario' })
       name: string;
   
       @IsString()
       @IsNotEmpty({message: 'O telefone não pode ser vazio'})
       @ApiProperty({ example: '(14)99733-9712', description: 'Telefone do usuario' })
       telefone: string;
   
       @IsString()
       @IsNotEmpty({message: 'O email não pode ser vazio'})
       @IsEmail()
       @ApiProperty({ example: 'teste@gmail.com', description: 'Email do usuario' })
       email: string;
   
       @IsString()
       @IsNotEmpty({message: 'O valor não pode ser vazio'})
       @ApiProperty({ example: 'R$1.000,00', description: 'Valor que quer doar' })
       valor: string;
   
       @IsString()
       @IsNotEmpty({message: 'A instituição não pode ser vazio'})
       @ApiProperty({ example: 'CVV', description: 'Nome da instituição que quer pedir Ajuda' })
       instituicao: string;
   
       @IsString()
       @IsNotEmpty({message: 'A cidade não pode ser vazio'})
       @ApiProperty({ example: 'Bauru', description: 'Nome da cidade do usuario' })
       cidade: string;
   
       @IsString()
       @IsNotEmpty({message: 'O estado não pode ser vazio'})
       @ApiProperty({ example: 'São Paulo', description: 'Nome do estado do usuario' })
       estado: string;



}