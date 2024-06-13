import { Module } from '@nestjs/common';
import { CookieService } from './cookie.service';
import { CookieController } from './cookie.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CookieController],
  providers: [CookieService, PrismaService],
})
export class CookieModule {}
