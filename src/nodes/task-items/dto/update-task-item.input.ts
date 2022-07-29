import { CreateTaskItemInput } from './create-task-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskItemInput extends PartialType(CreateTaskItemInput) {
  @Field(() => Int)
  id: number;
}
