import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import { InstitutionService } from 'src/modules/institution/institution.service';

function cookieExtractor(req: Request) {
  let token = null;
  if (req && req.cookies)
    token = req.cookies[process.env.COOKIE_NAME || 'auth_token'];
  return token;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private institutionService: InstitutionService) {
    super({
      jwtFromRequest: cookieExtractor,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'troque_esse_seguro',
    });

    console.log('JWT Strategy initialized');
  }

  async validate(payload: any) {
    const institution = await this.institutionService.findById(payload.sub);
    if (!institution) {
      throw new Error('Instituição não encontrada');
    }
    const { PASSWORD, ...result } = institution;
    return result;
  }
}
