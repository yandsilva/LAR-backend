import { Module } from '@nestjs/common';

import { QueroAjudarModule } from './modules/FormularioQueroAjudar/queroAjudar.module';
import { PrecisoAjudaModule } from './modules/FormularioPrecisoAjuda/precisoAjuda.module';
import { FaleConoscoModule } from './modules/FormularioFaleConosco/faleConosco.module';

@Module({
  imports: [PrecisoAjudaModule, QueroAjudarModule, FaleConoscoModule],
})
export class AppModule {}
