import { Module } from '@nestjs/common';
import { InstitutionModule } from 'src/modules/institution/institution.module';
import { UserModule } from 'src/modules/user/user.module';
import { QueroAjudarModule } from './modules/FormularioQueroAjudar/queroAjudar.module';
import { PrecisoAjudaModule } from './modules/FormularioPrecisoAjuda/precisoAjuda.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,
    InstitutionModule,
    PrecisoAjudaModule,
    QueroAjudarModule,
  ],

  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
