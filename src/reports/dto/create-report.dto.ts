import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReportDto {
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
