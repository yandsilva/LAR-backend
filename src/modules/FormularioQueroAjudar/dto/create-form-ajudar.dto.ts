import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateFormDto2 {

       @IsString()
       @IsNotEmpty({message: 'O nome não pode ser vazio'})
       @ApiProperty({ example: 'John Doe', description: 'Nome do usuario' })
       NAME: string;
   
       @IsString()
       @IsNotEmpty({message: 'O telefone não pode ser vazio'})
       @ApiProperty({ example: '(14)99733-9712', description: 'Telefone do usuario' })
       TELEFONE: string;
   
       @IsString()
       @IsNotEmpty({message: 'O email não pode ser vazio'})
       @IsEmail()
       @ApiProperty({ example: 'teste@gmail.com', description: 'Email do usuario' })
       EMAIL: string;
   
       @IsString()
       @IsNotEmpty({message: 'O valor não pode ser vazio'})
       @ApiProperty({ example: 'R$1.000,00', description: 'Valor que quer doar' })
       VALOR: string;
   
   
       @IsString()
       @IsNotEmpty({message: 'A cidade não pode ser vazio'})
       @ApiProperty({ example: 'Bauru', description: 'Nome da cidade do usuario' })
       CIDADE: string;
   
       @IsString()
       @IsNotEmpty({message: 'O estado não pode ser vazio'})
       @ApiProperty({ example: 'São Paulo', description: 'Nome do estado do usuario' })
       ESTADO: string;

       @IsOptional()
       @IsString()
       @ApiProperty({ example: 'institution-id-123', description: 'ID da instituição associada ao formulário' })
       INSTITUTION_ID?: string;

}