import * as bcrypt from "bcrypt"
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class QUEROAJUDAR{
    @PrimaryColumn()
    ID: string;

    @Column({length: 255})
    NAME: string;

    @Column({length: 255})
    TELEFONE: string;

    @Column({length: 255})
    EMAIL: string;

    @Column({length: 255})
    VALOR: string;

    @Column({length: 255})
    INSTITUICAO: string;

    @Column({length: 255})
    CIDADE: string;

    @Column({length: 255})
    ESTADO: string;    
}