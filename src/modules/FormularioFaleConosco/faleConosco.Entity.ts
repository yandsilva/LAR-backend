import * as bcrypt from 'bcrypt';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('faleconosco')
export class FaleConosco {
  @PrimaryColumn()
  ID: string;

  @Column({ length: 255 })
  NAME: string;

  @Column({ length: 255 })
  TELEFONE: string;

  @Column({ length: 255 })
  EMAIL: string;

  @Column({ length: 255 })
  ENDERECO: string;

  @Column({ length: 255 })
  ASSUNTO: string;

  @Column({ length: 255 })
  MENSAGEM: string;
}
