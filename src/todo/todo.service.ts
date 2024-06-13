import { Injectable } from '@nestjs/common';

export interface Todo {
  id: string;
  label: string;
  description: string;
  done: boolean;
}

@Injectable()
export class TodoService {}
