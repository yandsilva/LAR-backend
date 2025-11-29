import { DataSource } from 'typeorm';
import { PrecisoAjuda } from './precisoAjuda.Entity';

export const precisoAjudaProviders = [
  {
    provide: 'PRECISOAJUDA_REPOSITORY',
    useFactory: (DataSource: DataSource) =>
      DataSource.getRepository(PrecisoAjuda),
    inject: ['DATA_SOURCE'],
  },
];
