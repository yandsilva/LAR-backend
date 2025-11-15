import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateFormDto3 {

    @IsString()
    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    @ApiProperty({ example: 'Carla', description: 'Nome do usuario' })
    NAME: string;

    @IsString()
    @IsNotEmpty({message: 'O telefone não pode ser vazio'})
    @ApiProperty({ example: '(14)99999-9999', description: 'Telefone do usuario' })
    TELEFONE: string;

    @IsString()
    @IsNotEmpty({message: 'O email não pode ser vazio'})
    @IsEmail()
    @ApiProperty({ example: 'teste@gmail.com', description: 'Email do usuario' })
    EMAIL: string;

    @IsString()
    @IsNotEmpty({message: 'O assunto não pode ser vazio'})
    @ApiProperty({ example: 'Doação', description: 'Assunto da sua pergunta' })
    ASSUNTO: string;

    @IsString()
    @IsNotEmpty({message: 'O endereço não pode ser vazio'})
    @ApiProperty({ example: 'Rua Engenheiro Saint Martin, 10-12 - Centro, Bauru - SP,', description: 'Endereço do usuario' })
    ENDERECO: string;

    @IsString()
    @IsNotEmpty({message: 'A mensagem não pode ser vazio'})
    @ApiProperty({ example: 'Como funciona o envio de doação', description: 'Mensagem da pergunta' })
    MENSAGEM: string;

}
