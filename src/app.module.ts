import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { CookieModule } from './cookie/cookie.module';
import { PrismaService } from './prisma/prisma.service';
import { ReceitaModule } from './receita/receita.module';

@Module({
  imports: [IngredientesModule, CookieModule, ReceitaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
