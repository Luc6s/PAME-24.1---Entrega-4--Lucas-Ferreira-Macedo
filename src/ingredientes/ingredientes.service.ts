import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IngredientesService {

  constructor(private readonly prisma: PrismaService){}

  async create(createIngredienteDto: CreateIngredienteDto) {
    const ingrediente_criado = await this.prisma.ingrediente.create({ data: createIngredienteDto });
    return ingrediente_criado;
  }

  async findAll() {
    const ingredientes = await this.prisma.ingrediente.findMany();
    return ingredientes;
  }

  async findOne(id: number) {
    const ingrediente = await this.prisma.ingrediente.findUnique({where: { id } });
    return ingrediente;
  }

  async update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    const ingredienteAtualizado = await this.prisma.ingrediente.update({
      where: { id },
      data: updateIngredienteDto
    });
    return ingredienteAtualizado;
  }

  async remove(id: number) {
    const ingredienteRemovido = await this.prisma.ingrediente.delete({ where: { id }});
    return ingredienteRemovido;
  }
}
