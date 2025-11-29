import { Institution } from 'src/modules/institution/entities/institution.entity';
import { DataSource } from 'typeorm';

export const institutionProviders = [
  {
    provide: 'INSTITUTION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Institution),
    inject: ['DATA_SOURCE'],
  },
];
