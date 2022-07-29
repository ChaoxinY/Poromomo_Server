import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './nodes/users/users.module';
import { User } from './nodes/users/entities/user.entity';
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
    "entities": [Task, TaskItem,User],
    "synchronize": true
  }),
  GraphQLModule.forRoot({ autoSchemaFile: true }),
    UsersModule, TasksModule, TaskItemsModule],
})

export class AppModule { }
