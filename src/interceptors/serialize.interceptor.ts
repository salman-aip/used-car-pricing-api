import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable, map } from 'rxjs';

export class SerializeInterceptor implements NestInterceptor {
  constructor(private readonly customDTO: any) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    // run this block before a request is handled by route handler/controller
    console.log('Running before handler');

    return next.handle().pipe(
      map((data: any) => {
        // run before the response is sent out
        console.log('Running before response sent out');

        // turn data into instance of custom-user-dto
        return plainToInstance(this.customDTO, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}

export function Serialize(dto: any) {
  return UseInterceptors(new SerializeInterceptor(dto));
}
