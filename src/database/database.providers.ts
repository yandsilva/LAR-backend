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
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'LAR',
        entities: [join(__dirname, '/../**/*.entity.{js,ts}')],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];
