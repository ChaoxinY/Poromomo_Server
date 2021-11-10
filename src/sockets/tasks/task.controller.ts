import { Controller, Get } from '@nestjs/common';
import { TaskSevice } from './task.service';

@Controller()
export class TaskController {

    constructor(private readonly appService: TaskSevice) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
