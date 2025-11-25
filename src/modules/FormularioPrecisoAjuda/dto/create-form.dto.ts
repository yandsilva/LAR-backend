import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateFormDto {

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
    @IsNotEmpty({message: 'O assunto não pode ser vazio'})
    @ApiProperty({ example: 'Estou com sintomas...', description: 'Descrição do que sente' })
    ASSUNTO: string;

    @IsString()
    @IsNotEmpty({message: 'A cidade não pode ser vazio'})
    @ApiProperty({ example: 'Bauru', description: 'Nome da cidade do usuario' })
    CIDADE: string;

    @IsString()
    @IsNotEmpty({message: 'O estado não pode ser vazio'})
    @ApiProperty({ example: 'São Paulo', description: 'Nome do estado do usuario' })
    ESTADO: string;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário esta com tremor' })
    @IsOptional()
    TREMOR: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário esta com cansaco' })
    @IsOptional()
    CANSACO: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário esta com desanimo' })
    @IsOptional()
    DESANIMO: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário esta com falta de ar' })
    @IsOptional()
    FALTAAR: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário esta com agonia' })
    @IsOptional()
    AGONIA: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário esta com falta de foco' })
    @IsOptional()
    FALTAFOCO: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário esta com alteração de humor' })
    @IsOptional()
    ALTERACAOHUMOR: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário esta com sensação de conexão' })
    @IsOptional()
    SENSACAOCONEXAO: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário esta com preocupação com peso' })
    @IsOptional()
    PREOCUPACAOPESO: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário esta com perda de interesse' })
    @IsOptional()
    PERDAINTERESSE: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário sofreu abuso psicologico' })
    @IsOptional()
    ABUSOPSICOLOGICO: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário sofreu abuso fisico' })
    @IsOptional()
    ABUSOFISICO: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário sofreu abuso sexual' })
    @IsOptional()
    ABUSOSEXUAL: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário sofreu abuso patrimonial' })
    @IsOptional()
    ABUSOPATRIMONIAL: boolean;

    @IsBoolean()
    @ApiProperty({ example: true, description: 'Confirma se o usuário sofreu abuso moral' })
    @IsOptional()
    ABUSOMORAL: boolean;

    @IsOptional()
    @IsString()
    @ApiProperty({ example: 'institution-id-123', description: 'ID da instituição associada ao formulário' })
    INSTITUTION_ID?: string;


}
