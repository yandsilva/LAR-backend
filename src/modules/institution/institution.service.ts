import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateInstitutionDto } from 'src/modules/institution/dto/create-institution.dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { INSTITUTION } from 'src/modules/institution/entities/institution.entity';
import { RetornoPadraoDTO } from 'src/modules/dto/retorno.dto';
import { UpdateInstitutionDto } from 'src/modules/institution/dto/update-institution';
import { LoginInstitutionDto } from 'src/modules/institution/dto/login-institution.dto';

@Injectable()
export class InstitutionService {
  constructor(
    @Inject('INSTITUTION_REPOSITORY')
    private readonly institutionRepository: Repository<INSTITUTION>,
  ) {}

  async findByEmail(
    LoginInstitutionDto: LoginInstitutionDto,
  ): Promise<RetornoPadraoDTO> {
    const findEmail = await this.institutionRepository.findOne({
      where: { EMAIL: LoginInstitutionDto.EMAIL },
    });

    if (!findEmail) {
      throw new NotFoundException('Instituição não encontrada');
    }
    return <RetornoPadraoDTO>{
      data: findEmail,
      message: 'Instituição encontrada com sucesso',
    };
  }

  async registerInstitution(
    createInstitutionDto: CreateInstitutionDto,
  ): Promise<RetornoPadraoDTO> {
    const existingInstitution = await this.institutionRepository.findOne({
      where: {
        EMAIL: createInstitutionDto.EMAIL,
      },
    });

    if (existingInstitution) {
      throw new ConflictException('Instituição já existe!');
    }

    const hashedPassword = await bcrypt.hash(createInstitutionDto.PASSWORD, 10);

    let newInstitution = new INSTITUTION();
    newInstitution.ID = uuid();
    ((newInstitution.EMPRESA = createInstitutionDto.EMPRESA),
      (newInstitution.EMAIL = createInstitutionDto.EMAIL),
      (newInstitution.PASSWORD = hashedPassword));

    return this.institutionRepository
      .save(newInstitution)
      .then((result) => {
        return <RetornoPadraoDTO>{
          data: newInstitution.ID,
          message: 'Instituição criada com sucesso',
        };
      })
      .catch((error) => {
        throw new Error('Erro ao Inserir instituição', error);
      });
  }

  async update(id: string, dto: UpdateInstitutionDto) {
    const institution = await this.institutionRepository.findOne({
      where: { ID: id },
    });

    if (!institution) {
      throw new Error('Instituição não encontrada');
    }

    Object.assign(institution, dto);

    return await this.institutionRepository.save(institution);
  }
}
