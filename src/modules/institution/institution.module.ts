import { Module } from '@nestjs/common';
import { InstitutionController } from 'src/modules/institution/institution.controller';
import { InstitutionService } from 'src/modules/institution/institution.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [InstitutionController],
  providers: [InstitutionService, PrismaService],
})
export class InstitutionModule {}
