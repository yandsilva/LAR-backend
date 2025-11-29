import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '50.116.112.16',
        port: 3306,
        username: 'vitali04_adm_lugardeapoio',
        password: 'Apoiamos!@#123',
        database: 'vitali04_lugardeapoio',
        entities: [join(__dirname, '..', '**/*.entity{.ts,.js}')],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];
