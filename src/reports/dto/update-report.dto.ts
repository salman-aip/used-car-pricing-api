import { IsNumber, IsOptional } from 'class-validator';

export class UpdateReportDto {
  @IsNumber()
  @IsOptional()
  price: number;
}
