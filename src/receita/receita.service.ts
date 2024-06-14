import { Injectable } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReceitaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReceitaDto: CreateReceitaDto) {
    const receitaCriada = await this.prisma.receita.create({ data: createReceitaDto });
    return receitaCriada;
  }

  async findAll() {
    const receitas = await this.prisma.receita.findMany();
    return receitas;
  }

  async findOne(id: number) {
    const receita = await this.prisma.receita.findUnique({ where: { id } });
    return receita;
  }

  async update(id: number, updateReceitaDto: UpdateReceitaDto) {
    const receitaAtualizada = await this.prisma.receita.update({
      where: { id },
      data: updateReceitaDto,
    });
    return receitaAtualizada;
  }

  async remove(id: number) {
    const receitaRemovida = await this.prisma.receita.delete({ where: { id } });
    return receitaRemovida;
  }
}
