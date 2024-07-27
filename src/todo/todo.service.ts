import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private storage: Todo[] = [
    {
      id: 1,
      label: 'Todo',
      complete: false,
    },
  ];
  findAll(): Todo[] {
    return this.storage;
  }
  findOne(id: number): Todo {
    return this.storage.find((todo) => todo.id === id);
  }
  create(todo: Todo): void {
    const id = this.storage.length + 1;
    todo.id = id;
    this.storage.push(todo);
  }
  update(id: number, todo: Todo) {
    const index = this.storage.findIndex((todo) => todo.id === id);
    this.storage[index] = todo;
  }
  remove(id: number) {
    return this, this.storage.filter((todo) => todo.id !== id);
  }
}
