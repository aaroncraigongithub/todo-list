import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';

@Module({
  controllers: [ListController],
  providers: [ListService],
  exports: [ListService],
})
export class ListModule {}
