import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';

import { USERS } from 'src/modules/user/entities/users.entity';
import { Repository } from 'typeorm';
import { RetornoPadraoDTO } from 'src/modules/dto/retorno.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<USERS>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<RetornoPadraoDTO> {
    const existingUser = await this.usersRepository.findOne({
      where: {
        EMAIL: createUserDto.EMAIL,
      },
    });

    if (existingUser) {
      throw new ConflictException('Usuario já existe!');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.PASSWORD, 10);

    let newUser = new USERS();
    newUser.ID = uuid();
    ((newUser.NOME = createUserDto.NAME),
      (newUser.EMAIL = createUserDto.EMAIL),
      (newUser.PASSWORD = hashedPassword));

    return this.usersRepository
      .save(newUser)
      .then((result) => {
        return <RetornoPadraoDTO>{
          data: newUser.ID,
          message: 'usuario criado com sucesso',
        };
      })
      .catch((error) => {
        throw new Error('Erro ao inserir usuario', error);
      });
  }
}
