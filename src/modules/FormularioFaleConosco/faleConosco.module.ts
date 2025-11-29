import { Module } from '@nestjs/common';
import { faleConoscoController } from './faleConosco.controller';
import { DatabaseModule } from 'src/database/database.module';
import { faleConoscoProviders } from './faleConosco.providers';
import { FaleConoscoService } from './faleConosco.service';

@Module({
  imports: [DatabaseModule],
  controllers: [faleConoscoController],
  providers: [...faleConoscoProviders, FaleConoscoService],
})
export class FaleConoscoModule {}
