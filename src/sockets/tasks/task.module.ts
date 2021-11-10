import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskSevice } from './task.service';
import { TaskController } from './task.controller';
import { Task } from '../../database/entity/task';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TaskSevice],
  controllers: [TaskController],
})
export class TaskModule {
  
}