import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TaskModule} from './sockets/tasks/task.module'
import {Task} from './database/entity/task';

///qwdqwdw

@Module({
  imports: [TypeOrmModule.forRoot({   
  "type": "mysql",
  "host": "localhost",
  "username": "root",
  "password": "",
  "database": "poromomo",
  "entities": [Task],
  "synchronize": true}),TaskModule], 
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
