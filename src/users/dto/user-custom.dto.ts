import { Expose } from 'class-transformer';

export class CustomUserDTO {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
