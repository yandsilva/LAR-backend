import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InstitutionService } from 'src/modules/institution/institution.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly institutionService: InstitutionService,
    private readonly jwtService: JwtService,
  ) {}

  async validateInstitution(email: string, password: string) {
    const institution = await this.institutionService.findByEmail(email);

    if (!institution) {
      throw new UnauthorizedException('Instituição não encontrada');
    }

    const passwordValid = await bcrypt.compare(password, institution.PASSWORD);
    if (!passwordValid) {
      throw new UnauthorizedException('Email ou Senha inválida');
    }

    return institution;
  }

  async login(institution: any) {
    const payload = { email: institution.EMAIL, sub: institution.ID };
    return this.jwtService.sign(payload);
  }
}
