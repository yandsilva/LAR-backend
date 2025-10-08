import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules/user/user.module';
import { QueroAjudarModule } from './modules/FormularioQueroAjudar/queroAjudar.module';
import { PrecisoAjudaModule } from './modules/FormularioPrecisoAjuda/precisoAjuda.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [PrecisoAjudaModule,QueroAjudarModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
