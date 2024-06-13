import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { CookieModule } from './cookie/cookie.module';

@Module({
  imports: [IngredientesModule, CookieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
