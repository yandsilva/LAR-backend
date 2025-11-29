import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';
import { join } from 'path';
import { Institution } from 'src/modules/institution/entities/institution.entity';
import { PrecisoAjuda } from 'src/modules/FormularioPrecisoAjuda/precisoAjuda.Entity';
import { QueroAjudar } from 'src/modules/FormularioQueroAjudar/queroAjudar.Entity';
import { Users } from 'src/modules/user/entities/users.entity';
import { FaleConosco } from 'src/modules/FormularioFaleConosco/faleConosco.Entity';

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
        entities: [Institution, PrecisoAjuda, QueroAjudar, Users, FaleConosco],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];
