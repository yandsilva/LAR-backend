import { Module } from '@nestjs/common';

import { QueroAjudarModule } from './modules/FormularioQueroAjudar/queroAjudar.module';
import { PrecisoAjudaModule } from './modules/FormularioPrecisoAjuda/precisoAjuda.module';

@Module({
  imports: [PrecisoAjudaModule, QueroAjudarModule],
})
export class AppModule {}
