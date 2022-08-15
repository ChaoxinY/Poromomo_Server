import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskItemsService } from './task-items.service';
import { TaskItem } from './entities/task-item.entity';
import { CreateTaskItemInput } from './dto/create-task-item.input';
import { UpdateTaskItemInput } from './dto/update-task-item.input';

@Resolver(() => TaskItem)
export class TaskItemsResolver {
  constructor(private readonly taskItemsService: TaskItemsService) {}

  @Mutation(() => TaskItem)
  createTaskItem(@Args('createTaskItemInput') createTaskItemInput: CreateTaskItemInput) {
    return this.taskItemsService.create(createTaskItemInput);
  }

  @Query(() => [TaskItem], { name: 'taskItems' })
  findAll() {
    return this.taskItemsService.findAll();
  }

  @Query(() => TaskItem, { name: 'taskItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.taskItemsService.findOne(id);
  }

  @Mutation(() => TaskItem)
  updateTaskItem(@Args('updateTaskItemInput') updateTaskItemInput: UpdateTaskItemInput) {
    return this.taskItemsService.update(updateTaskItemInput.id, updateTaskItemInput);
  }

  @Mutation(() => String)
  removeTaskItem(@Args('id', { type: () => Int }) id: number) {
    return this.taskItemsService.remove(id);
  }
}
