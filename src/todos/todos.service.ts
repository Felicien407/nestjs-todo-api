import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  getTodos() {
    return [
      {
        id: 1,
        title: 'Learn NestJS',
        completed: false,
      },
      {
        id: 2,
        title: 'Build Todo API',
        completed: false,
      },
    ];
  }
}
