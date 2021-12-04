import { Module } from '@nestjs/common';
import { TaskController } from './sockets/tasks/task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TaskModule} from './sockets/tasks/task.module'
import {Task} from './database/entity/task';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './nodes/users/users.module';

///qwdqwdw

@Module({
  imports: [TypeOrmModule.forRoot({   
  "type": "mysql",
  "host": "localhost",
  "username": "root",
  "password": "",
  "database": "poromomo",
  "entities": [Task],
  "synchronize": true}),
  TaskModule,
  GraphQLModule.forRoot({autoSchemaFile: true}),
  UsersModule], 
})

export class AppModule { }
