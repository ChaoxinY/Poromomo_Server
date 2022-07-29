import { Module } from '@nestjs/common';
import { TaskItemsService } from './task-items.service';
import { TaskItemsResolver } from './task-items.resolver';

@Module({
  providers: [TaskItemsResolver, TaskItemsService]
})
export class TaskItemsModule {}
