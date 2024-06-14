// src/receita/dto/create-receita.dto.ts
import { IsString } from 'class-validator';

export class CreateReceitaDto {
  @IsString()
  sabor: string;
}
