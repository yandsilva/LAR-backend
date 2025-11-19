import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { InstitutionModule } from 'src/modules/institution/institution.module';
import { InstitutionController } from 'src/modules/institution/institution.controller';
import { AuthService } from 'src/modules/auth/auth.service';

@Module({
  imports: [
    InstitutionModule,
    JwtModule.register({
      secret: 'CHAVE_SECRETA_SUPER_SIMPLES',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [InstitutionController],
  providers: [AuthService],
})
export class AuthModule {}
