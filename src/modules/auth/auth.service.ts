import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InstitutionService } from 'src/modules/institution/institution.service';
import { LoginInstitutionDto } from 'src/modules/institution/dto/login-institution.dto';

@Injectable()
export class AuthService {
  constructor(
    private institutionService: InstitutionService,
    private jwtService: JwtService,
  ) {}

  async login(loginInstitutionDto: LoginInstitutionDto) {
    const institution =
      await this.institutionService.findByEmail(loginInstitutionDto);

    if (!institution) throw new UnauthorizedException('Credenciais inválidas');

    const ok = await bcrypt.compare(
      institution.data.PASSWORD,
      loginInstitutionDto.PASSWORD,
    );
    if (!ok) throw new UnauthorizedException('Credenciais inválidas');

    const accessTokenPayload = this.jwtService.sign({
      INSTITUTION_ID: institution.data.INSTITUTION_ID,
      EMAIL: institution.data.EMAIL,
    });

    const refreshTokenPayload = this.jwtService.sign(
      {
        INSTITUTION_ID: institution.data.INSTITUTION_ID,
        EMAIL: institution.data.EMAIL,
      },
      { expiresIn: '7d' },
    );
    const token = {
      accessToken: accessTokenPayload,
      refreshToken: refreshTokenPayload,
    };

    return { token };
  }
}
