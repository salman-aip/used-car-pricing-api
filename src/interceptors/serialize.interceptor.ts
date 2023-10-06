import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

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
      }),
    );
  }
}
