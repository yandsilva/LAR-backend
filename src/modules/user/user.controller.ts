import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { UserService } from 'src/modules/user/user.service';
import { ChangePasswordDto } from './dto/change-password.dto';


@Controller('users')
@ApiTags('usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      if (error.message === 'Usuário já existe') {
        throw new ConflictException('Usuário já existe');
      }
      throw new InternalServerErrorException('Erro inesperado do servidor');
    }
  }

@Put('change-password/:id')
async changePassword(
  @Param('id') userId: string,
  @Body() dto: ChangePasswordDto,
) {
  return this.userService.changePassword(dto, userId);
}
}