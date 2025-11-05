import { Module } from '@nestjs/common';

import { QueroAjudarModule } from './modules/FormularioQueroAjudar/queroAjudar.module';
import { PrecisoAjudaModule } from './modules/FormularioPrecisoAjuda/precisoAjuda.module';
import { databaseModule } from 'src/database/database.module';
import { FaleConoscoModule } from './modules/FormularioFaleConosco/faleConosco.module';

@Module({
  imports: [databaseModule, PrecisoAjudaModule, QueroAjudarModule, FaleConoscoModule],
})
export class AppModule {}