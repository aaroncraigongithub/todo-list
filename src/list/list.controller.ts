import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { List, ListService } from './list.service';

interface ListParams {
  id: string;
}

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get(':id')
  find(@Param() params: ListParams): List {
    const list = this.listService.find(params.id);

    if (!list) {
      throw new HttpException('List not found', 404);
    }

    return list;
  }
}
