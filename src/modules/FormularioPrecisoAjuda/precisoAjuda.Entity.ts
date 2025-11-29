import * as bcrypt from 'bcrypt';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Institution } from '../institution/entities/institution.entity';

@Entity('precisoajuda')
export class PrecisoAjuda {
  @PrimaryColumn()
  ID: string;

  @Column({ length: 255 })
  NAME: string;

  @Column({ length: 255 })
  TELEFONE: string;

  @Column({ length: 255 })
  EMAIL: string;

  @Column({ length: 255 })
  ASSUNTO: string;

  @Column({ length: 255 })
  CIDADE: string;

  @Column({ length: 255 })
  ESTADO: string;

  @Column()
  TREMOR: boolean;

  @Column()
  CANSACO: boolean;

  @Column()
  DESANIMO: boolean;

  @Column()
  FALTAAR: boolean;

  @Column()
  AGONIA: boolean;

  @Column()
  FALTAFOCO: boolean;

  @Column()
  ALTERACAOHUMOR: boolean;

  @Column()
  SENSACAOCONEXAO: boolean;

  @Column()
  PREOCUPACAOPESO: boolean;

  @Column()
  PERDAINTERESSE: boolean;

  @Column()
  ABUSOPSICOLOGICO: boolean;

  @Column()
  ABUSOFISICO: boolean;

  @Column()
  ABUSOSEXUAL: boolean;

  @Column()
  ABUSOPATRIMONIAL: boolean;

  @Column()
  ABUSOMORAL: boolean;

  @ManyToOne(() => Institution, (instituicao) => instituicao.PrecisoAjuda, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'INSTITUTION_ID' }) // FK no banco
  Institution: Institution;
}
