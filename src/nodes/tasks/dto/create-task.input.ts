import { InputType, Int, Field } from '@nestjs/graphql';
import { TaskItem } from 'src/nodes/task-items/entities/task-item.entity';

@InputType()
export class CreateTaskInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  // @Field(() => [TaskItem])
  // taskItems: TaskItem[];
}
