import * as bcrypt from 'bcrypt';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { INSTITUTION } from '../institution/entities/institution.entity';

@Entity('QUEROAJUDAR')
export class QUEROAJUDAR {
  @PrimaryColumn()
  ID: string;

  @Column({ length: 255 })
  NAME: string;

  @Column({ length: 255 })
  TELEFONE: string;

  @Column({ length: 255 })
  EMAIL: string;

  @Column({ length: 255 })
  VALOR: string;

  // @Column({length: 255})
  // INSTITUICAO: string;

  @Column({ length: 255 })
  CIDADE: string;

  @Column({ length: 255 })
  ESTADO: string;

  @ManyToOne(() => INSTITUTION, (instituicao) => instituicao.QUEROAJUDAR, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'INSTITUTION_ID' }) // FK no banco
  INSTITUICAO: INSTITUTION;
}
