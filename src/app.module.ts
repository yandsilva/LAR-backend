import { Module } from '@nestjs/common';
import { InstitutionModule } from 'src/modules/institution/institution.module';
import { UserModule } from 'src/modules/user/user.module';
import { QueroAjudarModule } from './modules/FormularioQueroAjudar/queroAjudar.module';
import { PrecisoAjudaModule } from './modules/FormularioPrecisoAjuda/precisoAjuda.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
<<<<<<< HEAD
  imports: [PrecisoAjudaModule,QueroAjudarModule],
=======
  imports: [UserModule, InstitutionModule],
>>>>>>> 42d9af8dc3e4699d0e699c0ee0eb5262ffefacec
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
