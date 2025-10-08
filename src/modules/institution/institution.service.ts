import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInstitutionDto } from 'src/modules/institution/dto/create-institution.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UpdateInstitutionDto } from 'src/modules/institution/dto/update-institution';

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

    return await this.prisma.institution.create({
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
        phone: true,
        about: true,
        url: true,
        socialLinks: true,
      },
    });
  }

  async findOne(id: number) {
    const institution = await this.prisma.institution.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        about: true,
        url: true,
        socialLinks: true,
      },
    });

    if (!institution) {
      throw new NotFoundException(`Instituição #${id} não encontrado`);
    }
    return institution;
  }

  async updateOne(id: number, updateInstitutionDto: UpdateInstitutionDto) {
    const existingInstitution = await this.prisma.institution.findUnique({
      where: { id },
    });

    if (!existingInstitution) {
      throw new NotFoundException('Instituição não encontrada');
    }

    return await this.prisma.institution.update({
      where: { id },
      data: {
        phone: updateInstitutionDto.phone ?? existingInstitution.phone,
        about: updateInstitutionDto.about ?? existingInstitution.about,
        url: updateInstitutionDto.url ?? existingInstitution.url,
        socialLinks: {
          ...updateInstitutionDto.socialLinks,
        },
      },
    });
  }

  async deleteOne(id: number) {
    const existingInstitution = await this.prisma.institution.findUnique({
      where: { id },
    });

    if (!existingInstitution) {
      throw new NotFoundException('Instituição não encontrada');
    }

    return await this.prisma.institution.delete({ where: { id } });
  }
}
