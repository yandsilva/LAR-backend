import { Module } from '@nestjs/common';

import { QueroAjudarModule } from './modules/FormularioQueroAjudar/queroAjudar.module';
import { PrecisoAjudaModule } from './modules/FormularioPrecisoAjuda/precisoAjuda.module';
import { databaseModule } from 'src/database/database.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/common/errors/HttpExceptionFilter';
import { InstitutionModule } from 'src/modules/institution/institution.module';

@Module({
  imports: [
    databaseModule,
    PrecisoAjudaModule,
    QueroAjudarModule,
    InstitutionModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
