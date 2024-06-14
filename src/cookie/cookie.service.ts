import { Injectable } from '@nestjs/common';
import { CreateCookieDto } from './dto/create-cookie.dto';
import { UpdateCookieDto } from './dto/update-cookie.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CookieService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCookieDto: CreateCookieDto) {
    const data: any = {
      estoque: createCookieDto.estoque,
      validade: new Date(createCookieDto.validade),
      id_receita: createCookieDto.id_receita,
      ingredientes: {
        connect: createCookieDto.ingredientes.map(id => ({ id }))
      }
    };

    const cookieCriado = await this.prisma.cookie.create({ data });
    return cookieCriado;
  }

  async findAll() {
    const cookies = await this.prisma.cookie.findMany({
      include: {
        ingredientes: true,
        receita: true,
      },
    });
    return cookies;
  }

  async findOne(id: number) {
    const cookie = await this.prisma.cookie.findUnique({
      where: { id },
      include: {
        ingredientes: true,
        receita: true,
      },
    });
    return cookie;
  }

  async update(id: number, updateCookieDto: UpdateCookieDto) {
    const data: any = {
      estoque: updateCookieDto.estoque,
      validade: new Date(updateCookieDto.validade),
      id_receita: updateCookieDto.id_receita,
    };

    if (updateCookieDto.ingredientes) {
      data.ingredientes = {
        set: updateCookieDto.ingredientes.map(id => ({ id }))
      };
    }

    const cookieAtualizado = await this.prisma.cookie.update({
      where: { id },
      data,
    });
    return cookieAtualizado;
  }

  async remove(id: number) {
    const cookieRemovido = await this.prisma.cookie.delete({ where: { id } });
    return cookieRemovido;
  }
}
