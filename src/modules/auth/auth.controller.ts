import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from 'src/modules/auth/auth.service';
import { LoginInstitutionDto } from 'src/modules/institution/dto/login-institution.dto';
import { InstitutionService } from 'src/modules/institution/institution.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly institutionService: InstitutionService,
  ) {}

  @Post('login')
  async login(
    @Body() dto: LoginInstitutionDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const institution = await this.authService.validateInstitution(
      dto.EMAIL,
      dto.PASSWORD,
    );
    if (!institution) {
      throw new Error('Invalid credentials');
    }
    const token = await this.authService.login(institution);

    res.cookie('auth_token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: 'production' === process.env.NODE_ENV,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    const { PASSWORD, ...institutionData } = institution;

    return {
      success: true,
      institution: institutionData,
    };
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('auth_token');
    return { success: true };
  }

  //   @Get('me')
  //     async getMe(@Res({ passthrough: true }) req: Request) {
  //     return req.institution;
  //     }
}
