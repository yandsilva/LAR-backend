import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
