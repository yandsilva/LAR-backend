import { USERS } from 'src/modules/user/entities/users.entity';
import { DataSource } from 'typeorm';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(USERS),
    inject: ['DATA_SOURCE'],
  },
];
