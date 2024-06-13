import { Injectable } from '@nestjs/common';
import { Todo } from 'src/todo/todo.service';

export interface List {
  id: string;
  label: string;
  todos: Todo[];
}

@Injectable()
export class ListService {
  private readonly lists: Record<string, List> = {
    1: {
      id: '1',
      label: 'List 1',
      todos: [],
    },
  };

  create(list: List): void {
    this.lists[list.id] = list;
  }

  find(id: string): List | undefined {
    return this.lists[id];
  }
}
