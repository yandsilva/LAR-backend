import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { InstitutionModule } from 'src/modules/institution/institution.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/modules/auth/auth.controller';
import { JwtStrategy } from 'src/modules/auth/jwt.strategy';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

@Module({
  imports: [
    InstitutionModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'troque_esse_seguro',
      signOptions: {
        expiresIn: (process.env.JWT_EXPIRES_IN as any) || '3600s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
