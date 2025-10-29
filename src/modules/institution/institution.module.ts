import { Module } from '@nestjs/common';
import { InstitutionController } from 'src/modules/institution/institution.controller';
import { InstitutionService } from 'src/modules/institution/institution.service';

@Module({
  imports: [],
  controllers: [InstitutionController],
  providers: [],
})
export class InstitutionModule {}
