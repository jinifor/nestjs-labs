import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * https://docs.nestjs.com/first-steps
 * 
 * 핵심 기능인 NestFactory를 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 엔트리 파일
 * The entry file of the application which uses the core function NestFactory to create a Nest application instance.
 */
async function bootstrap() {

  // Creates an instance of NestApplication
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
