import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ManagersController } from './managers/managers.controller';

/**
 * 애플리케이션의 루트 모듈 : The root module of the application.
 */
@Module({
  imports: [UsersModule],
  controllers: [AppController, UsersController, ManagersController],
  providers: [AppService],
})
export class AppModule {}
