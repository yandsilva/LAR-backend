import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { InstitutionController } from 'src/modules/institution/institution.controller';
import { InstitutionService } from 'src/modules/institution/institution.service';
import { institutionProviders } from 'src/modules/institution/provider';

@Module({
  imports: [DatabaseModule],
  exports: [InstitutionService],
  controllers: [InstitutionController],
  providers: [...institutionProviders, InstitutionService],
})
export class InstitutionModule {}
