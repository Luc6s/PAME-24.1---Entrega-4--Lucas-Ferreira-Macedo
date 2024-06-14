// src/cookie/dto/create-cookie.dto.ts
import { IsInt, IsOptional, IsDateString, IsArray, ArrayNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCookieDto {
  @IsInt()
  estoque: number;

  @IsDateString()
  validade: string;

  @IsOptional()
  @IsInt()
  id_receita?: number;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Number)
  ingredientes: number[];
}
