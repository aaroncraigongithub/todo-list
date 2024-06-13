import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ListController } from './list/list.controller';
import { ListModule } from './list/list.module';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [TodoModule, ListModule],
  controllers: [AppController, ListController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
