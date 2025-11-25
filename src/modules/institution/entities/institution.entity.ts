import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { PRECISOAJUDA } from '../../FormularioPrecisoAjuda/precisoAjuda.Entity';

@Entity()
export class INSTITUTION {
  @PrimaryColumn()
  ID: string;

  @Column({ length: 255 })
  EMPRESA: string;

  @Column({ length: 255, unique: true })
  EMAIL: string;

  @Column()
  PASSWORD: string;

  @Column()
  PHONE: string;

  @Column()
  ABOUT: string;

  @Column()
  IMAGE: string;

  @Column()
  INSTAGRAM: string;

  @Column()
  FACEBOOK: string;

  @Column()
  LINKEDIN: string;

  @OneToMany(() => PRECISOAJUDA, (PRECISOAJUDA) => PRECISOAJUDA.INSTITUICAO)
  PRECISOAJUDA: PRECISOAJUDA[];

}
