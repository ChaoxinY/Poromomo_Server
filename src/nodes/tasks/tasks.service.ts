import { Injectable, Logger } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TaskItem } from '../task-items/entities/task-item.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(private connection: Connection) { }

  async create(createTaskInput: CreateTaskInput) {

    //Save task first
    let taskRepository = this.connection.getRepository(Task);
    let task: Task = { id: null, description: createTaskInput.description, title: createTaskInput.title, taskItems: [] };
    await taskRepository.save(task);

    //If there are any task items save them as well
    if (createTaskInput.items.length >= 0) {
      await this.createTaskItems(createTaskInput, task);
    }
    //If usage increase should retrun all new object to prevent a follow up call.
    return task ;
  }

  async createTaskItems(createTaskInput: CreateTaskInput, task: Task) {

    let taskItemRepository = this.connection.getRepository(TaskItem);
    let taskItems: TaskItem[] = [];
    for (let i = 0; i < createTaskInput.items.length; i++) {
      let input = createTaskInput.items[i];
      let item = new TaskItem()
      item.description = input.description;
      item.isDone = input.isDone;
      item.task = task;
      taskItems.push(item);
    }
    await taskItemRepository.save(taskItems);
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
