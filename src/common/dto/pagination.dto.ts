import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsPositive()
  @IsNumber()
  offset?: number;
}
