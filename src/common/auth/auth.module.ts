import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/common/auth/auth.controller';
import { AuthService } from 'src/common/auth/auth.service';
import { InstitutionModule } from 'src/modules/institution/institution.module';

@Module({
  exports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.mysecret || 'super-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
    InstitutionModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
