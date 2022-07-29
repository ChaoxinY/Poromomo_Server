import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(private connection: Connection) {}

  async create(createTaskInput: CreateTaskInput) {
    let taskRepository = this.connection.getRepository(Task);
    let task:Task = {id:null, description:createTaskInput.description,title:createTaskInput.title};
    await taskRepository.save(task);
    return task;
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
