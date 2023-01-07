import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 단일 경로가 있는 기본 컨트롤러 : A basic controller with a single route.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
