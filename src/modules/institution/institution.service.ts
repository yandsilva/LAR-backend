import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInstitutionDto } from 'src/modules/institution/dto/create-institution.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class InstitutionService {
  constructor(private prisma: PrismaService) {}

  async create(createInstitutionDto: CreateInstitutionDto) {
    const hanshedPassword = await bcrypt.hash(
      createInstitutionDto.password,
      10,
    );

    const existingInstitution = await this.prisma.institution.findFirst({
      where: {
        email: createInstitutionDto.email,
      },
    });

    if (existingInstitution) {
      throw new Error('Instituição já existe');
    }

    return this.prisma.institution.create({
      data: {
        name: createInstitutionDto.name,
        email: createInstitutionDto.email,
        password: hanshedPassword,
      },
    });
  }

  findAll() {
    return this.prisma.institution.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async findOne(id: number) {
    const institution = await this.prisma.institution.findUnique({
      where: { id },
      select: { id: true, name: true, email: true },
    });

    if (!institution) {
      throw new NotFoundException(`Instituição #${id} não encontrado`);
    }
    return institution;
  }
}
