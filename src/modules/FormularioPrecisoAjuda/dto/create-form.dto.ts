import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateFormDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'John Doe', description: 'Nome do usuario' })
    name: string;

    @IsNotEmpty()
    @ApiProperty({ example: '(14)99733-9712', description: 'Telefone do usuario' })
    telefone: string;

    @IsEmail()
    @ApiProperty({ example: 'teste@gmail.com', description: 'Email do usuario' })
    email: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'Estou com sintomas...', description: 'Descrição do que sente' })
    assunto: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'CVV', description: 'Nome da instituição que quer pedir Ajuda' })
    instituicao: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'Bauru', description: 'Nome da cidade do usuario' })
    cidade: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'São Paulo', description: 'Nome do estado do usuario' })
    estado: string;




}
