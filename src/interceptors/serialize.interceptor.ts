import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable, map } from 'rxjs';
import { CustomUserDTO } from 'src/users/dto/user-custom.dto';

export class SerializeInterceptor implements NestInterceptor {
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
        return plainToClass(CustomUserDTO, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
