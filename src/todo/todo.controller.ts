import {
  Controller,
  Get,
  Delete,
  Put,
  Post,
  Body,
  Logger,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name);
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    this.logger.log('handling get all todos');
    return this.todoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Todo {
    this.logger.log(`handling get todo by id ${id}`);
    return this.todoService.findOne(id);
  }
  @Post()
  create(@Body() todo: Todo): void {
    this.logger.log(`handling create todo`);
    return this.todoService.create(todo);
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() todo: Todo) {
    this.logger.log('Handling update() request with id=' + id + '...');
    return this.todoService.update(id, todo);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.logger.log('Handling remove() request with id=' + id + '...');
    return this.todoService.remove(id);
  }
}
