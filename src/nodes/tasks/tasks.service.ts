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
    //If an id is given, update de entity instead.
    if (createTaskInput.id != -1 && createTaskInput.id != null) {
      task.id = createTaskInput.id;
      Logger.log(task.id);
    }

    Logger.log(task.description);
    await taskRepository.save(task);

    //If there are any task items save them as well
    if (createTaskInput.items.length >= 0) {
      await this.createTaskItems(createTaskInput, task);
    }
    //If usage increase should retrun all new object to prevent a follow up call.
    return task;
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
      if (input.id != -1 && input.id != null) {
        item.id = input.id;
      }
      taskItems.push(item);
    }
    await taskItemRepository.save(taskItems);
  }

  async findAll() {
    return await this.connection.getRepository(Task).find()
  }

  async findOne(id: number) {
    return await this.connection.getRepository(Task).findOne(id)
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    await this.connection.getRepository(Task).delete(id)
    return "done";
  }
}
