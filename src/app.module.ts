import { Module } from '@nestjs/common';
import { TaskController } from './sockets/tasks/task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TaskModule} from './sockets/tasks/task.module'
import {Task} from './database/entity/task';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './nodes/users/users.module';
import { User } from './nodes/users/entities/user.entity';

///qwdqwdw

@Module({
  imports: [TypeOrmModule.forRoot({   
  "type": "mysql",
  "host": "localhost",
  "username": "root",
  "password": "",
  "database": "poromomo",
  "entities": [Task,User],
  "synchronize": true}),
  TaskModule,
  GraphQLModule.forRoot({autoSchemaFile: true}),
  UsersModule], 
})

export class AppModule { }
