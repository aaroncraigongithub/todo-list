import { Module } from '@nestjs/common';
import { TaskRunner } from './cli/tasks.command';
import { ListModule } from './list/list.module';

@Module({
  imports: [ListModule],
  providers: [TaskRunner],
})
export class AppModule {}
