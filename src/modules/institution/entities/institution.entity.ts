import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { PrecisoAjuda } from '../../FormularioPrecisoAjuda/precisoAjuda.Entity';
import { QueroAjudar } from 'src/modules/FormularioQueroAjudar/queroAjudar.Entity';

@Entity('institution')
export class Institution {
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

  @OneToMany(() => PrecisoAjuda, (PrecisoAjuda) => PrecisoAjuda.Institution)
  PrecisoAjuda: PrecisoAjuda[];

  @OneToMany(() => QueroAjudar, (QueroAjudar) => QueroAjudar.Institution)
  QueroAjudar: QueroAjudar[];
}
