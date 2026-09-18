import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TodosService {
  private todos = [
    {
      id: 1,
      title: 'Learn NestJS',
      completed: false,
    },
    {
      id: 2,
      title: 'Complete Todo API',
      completed: false,
    },
    {
      id: 3,
      title: 'Launch first endpoint',
      completed: true,
    },
  ];

  getTodos() {
    return this.todos;
  }

  getTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} is not found!`);
    }
    return todo;
  }
}
