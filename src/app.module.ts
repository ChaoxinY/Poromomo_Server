import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { TasksModule } from './nodes/tasks/tasks.module';
import { TaskItemsModule } from './nodes/task-items/task-items.module';
import { Task } from './nodes/tasks/entities/task.entity';
import { TaskItem } from './nodes/task-items/entities/task-item.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "username": "root",
    "password": "",
    "database": "poromomo",
    "entities": [Task, TaskItem],
    "synchronize": true
  }),
  GraphQLModule.forRoot({ autoSchemaFile: true }),
    TasksModule, TaskItemsModule],
})

export class AppModule { }
