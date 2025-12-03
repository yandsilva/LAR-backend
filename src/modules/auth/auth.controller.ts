import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { AuthService } from 'src/modules/auth/auth.service';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
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

    const COOKIE_NAME = process.env.COOKIE_NAME || 'auth_token';

    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 3600 * 1000,
      path: '/',
    });

    const { PASSWORD, ...institutionData } = institution;

    return {
      success: true,
      institution: institutionData,
      ID: institution.ID,
    };
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('auth_token');
    return { success: true };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() req: Request) {
    return req.user;
  }
}
