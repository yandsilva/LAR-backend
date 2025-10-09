import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InstitutionService } from 'src/modules/institution/institution.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly institutionService: InstitutionService,
    private readonly jwtService: JwtService,
  ) {}

  async validateInstitution(email: string, password: string) {
    const institution = await this.institutionService.findByEmail(email);
    if (institution && (await bcrypt.compare(password, institution.password))) {
      const { password, ...result } = institution;
      return result;
    }
    throw new UnauthorizedException("'Credenciais inválidas'");
  }

  async login(loginInstitutionDto: any) {
    const payload = {
      sub: loginInstitutionDto.id,
      email: loginInstitutionDto.email,
    };
    return {
      access_token: this.jwtService.sign(payload),
      loginInstitutionDto,
    };
  }
}
