import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class USERS {
  @PrimaryColumn()
  ID: string;

  @Column({ length: 255 })
  NOME: string;

  @Column({ length: 255, unique: true })
  EMAIL: string;

  @Column()
  PASSWORD: string;
}
