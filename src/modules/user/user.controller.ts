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
import { ErrorHandleDto } from 'src/common/errors/error.util';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { UserService } from 'src/modules/user/user.service';

@Controller('/users')
@ApiTags('usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/sign-up')
  async create(@Body() createUserDto: CreateUserDto): Promise<ErrorHandleDto> {
    try {
      return new ErrorHandleDto(
        'Usuario criado com sucesso',
        this.userService.create(createUserDto),
      );
    } catch (error) {
      if (error.message === 'Usuário já existe') {
        throw new ConflictException('Usuário já existe');
      }
      throw new InternalServerErrorException('Erro inesperado do servidor');
    }
  }
}
