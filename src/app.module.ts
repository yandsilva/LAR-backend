import { Module } from '@nestjs/common';

import { QueroAjudarModule } from './modules/FormularioQueroAjudar/queroAjudar.module';
import { PrecisoAjudaModule } from './modules/FormularioPrecisoAjuda/precisoAjuda.module';
import { databaseModule } from 'src/database/database.module';

@Module({
  imports: [databaseModule, PrecisoAjudaModule, QueroAjudarModule],
})
export class AppModule {}
