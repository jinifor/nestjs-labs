import { Injectable } from '@nestjs/common';

/**
 * 단일 메서드를 사용하는 기본 서비스 : A basic service with a single method.
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
