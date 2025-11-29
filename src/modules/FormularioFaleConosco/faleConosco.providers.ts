import { DataSource } from 'typeorm';
import { FaleConosco } from './faleConosco.Entity';

export const faleConoscoProviders = [
  {
    provide: 'FALECONOSCO_REPOSITORY',
    useFactory: (DataSource: DataSource) =>
      DataSource.getRepository(FaleConosco),
    inject: ['DATA_SOURCE'],
  },
];
