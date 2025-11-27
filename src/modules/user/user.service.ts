import { ConflictException, Inject, Injectable, Param } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { USERS } from 'src/modules/user/entities/users.entity';
import { Repository } from 'typeorm';
import { RetornoPadraoDTO } from 'src/modules/dto/retorno.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { LoginUserDto } from './dto/login.dto';



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
    ((newUser.NOME = createUserDto.NOME),
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

async login(dto:LoginUserDto){
  const existingUser=await this.usersRepository.findOne({
    where:{
      EMAIL:dto.EMAIL
    }
  })
  console.log(existingUser)
  if(!existingUser){
    throw new ConflictException('Email ou Senha inválidos.')
  } 
  const validatePassword = await bcrypt.compare(dto.PASSWORD,existingUser.PASSWORD)
  console.log(existingUser)
  if(!validatePassword){
    throw new ConflictException('Email ou Senha inválidos.')
  } 
  return existingUser
}

async changePassword(dto: ChangePasswordDto, userId: string) {
  const { CURRENTPASSWORD, NEWPASSWORD, CONFIRMNEWPASSWORD } = dto;
   
const user = await this.usersRepository.findOne({
  where: {
    ID: userId
  },
});


 if (!user){
  throw new Error("Email não existe!")
 }
 if (NEWPASSWORD !== CONFIRMNEWPASSWORD) {
      throw new ConflictException('As novas senhas não coincidem');
    }

const isPasswordValid = await bcrypt.compare(
      CURRENTPASSWORD,
      user.PASSWORD,
    );

 if (!isPasswordValid) {
      throw new ConflictException('Senha atual incorreta');
    }

  const hashedNewPassword = await bcrypt.hash(NEWPASSWORD, 10);

    await this.usersRepository.update(
      { ID: userId },
      { PASSWORD: hashedNewPassword},
    );

    return { message: 'Senha atualizada com sucesso' };
}


}
