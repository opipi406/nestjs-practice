import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsPositive, Max } from 'class-validator';

export class HeavyQueryDTO {
  @IsNotEmpty()
  @Type(() => Number)
  @Max(10)
  @IsPositive()
  readonly time: number;
}

export class HeavyResponseDTO {
  readonly message: string;
  readonly processTime: number;
}
