import { Module } from '@nestjs/common';
import { databaseModule } from 'src/database/database.module';
import { InstitutionController } from 'src/modules/institution/institution.controller';
import { InstitutionService } from 'src/modules/institution/institution.service';
import { institutionProviders } from 'src/modules/institution/provider';

@Module({
  imports: [databaseModule],
  controllers: [InstitutionController],
  providers: [...institutionProviders, InstitutionService],
})
export class InstitutionModule {}
