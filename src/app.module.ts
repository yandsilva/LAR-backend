import { Module } from '@nestjs/common';
import { InstitutionModule } from 'src/modules/institution/institution.module';
import { UserModule } from 'src/modules/user/user.module';
import { QueroAjudarModule } from './modules/FormularioQueroAjudar/queroAjudar.module';
import { PrecisoAjudaModule } from './modules/FormularioPrecisoAjuda/precisoAjuda.module';

@Module({
  imports: [
    UserModule,
    InstitutionModule,
    PrecisoAjudaModule,
    QueroAjudarModule,
  ],
})
export class AppModule {}
