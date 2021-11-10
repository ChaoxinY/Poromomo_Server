import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Task} from '../../database/entity/task';

@Injectable()
export class TaskSevice {
  
  constructor(private connection: Connection) {}

  getHello(): string {

    let task = new Task();
    task.name = "Me and Bears";
    let taskRepository = this.connection.getRepository(Task);

    async () => { await taskRepository.save(task); }

    console.log("task has been saved");

    return 'Your a momo!';
  }
}
