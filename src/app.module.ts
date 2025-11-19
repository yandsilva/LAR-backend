import { Module } from '@nestjs/common';
import { QueroAjudarModule } from './modules/FormularioQueroAjudar/queroAjudar.module';
import { PrecisoAjudaModule } from './modules/FormularioPrecisoAjuda/precisoAjuda.module';
import { DatabaseModule } from 'src/database/database.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/common/errors/HttpExceptionFilter';
import { InstitutionModule } from 'src/modules/institution/institution.module';
import { FaleConoscoModule } from './modules/FormularioFaleConosco/faleConosco.module';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    PrecisoAjudaModule,
    QueroAjudarModule,
    InstitutionModule,
    FaleConoscoModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
