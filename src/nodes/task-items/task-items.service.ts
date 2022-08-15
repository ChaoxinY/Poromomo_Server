import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Task } from '../tasks/entities/task.entity';
import { CreateTaskItemInput } from './dto/create-task-item.input';
import { UpdateTaskItemInput } from './dto/update-task-item.input';
import { TaskItem } from './entities/task-item.entity';

@Injectable()
export class TaskItemsService {

  constructor(private connection: Connection) {}

  async create(createTaskItemInput: CreateTaskItemInput) {

  }

  findAll() {
    return `This action returns all taskItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taskItem`;
  }

  update(id: number, updateTaskItemInput: UpdateTaskItemInput) {
    return `This action updates a #${id} taskItem`;
  }

  async remove(id: number) {
    await this.connection.getRepository(TaskItem).delete(id)
    return "done";
  }
}
