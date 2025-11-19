import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { DatabaseModule } from 'src/database/database.module';
import { InstitutionModule } from 'src/modules/institution/institution.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/modules/auth/auth.controller';

@Module({
  imports: [
    InstitutionModule,
    PassportModule,
    JwtModule.register({
      secret: 'process.env.JWT_SECRET',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
