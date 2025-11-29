import { DataSource } from 'typeorm';
import { QueroAjudar } from './queroAjudar.Entity';

export const queroAjudarProviders = [
  {
    provide: 'QUEROAJUDAR_REPOSITORY',
    useFactory: (DataSource: DataSource) =>
      DataSource.getRepository(QueroAjudar),
    inject: ['DATA_SOURCE'],
  },
];
