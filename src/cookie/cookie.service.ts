import { Injectable } from '@nestjs/common';
import { CreateCookieDto } from './dto/create-cookie.dto';
import { UpdateCookieDto } from './dto/update-cookie.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CookieService {

  constructor(private readonly prisma: PrismaService){}


  create(createCookieDto: CreateCookieDto) {
    return 'This action adds a new cookie';
  }

  findAll() {
    return `This action returns all cookie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cookie`;
  }

  update(id: number, updateCookieDto: UpdateCookieDto) {
    return `This action updates a #${id} cookie`;
  }

  remove(id: number) {
    return `This action removes a #${id} cookie`;
  }
}
