import { InputType, Int, Field } from '@nestjs/graphql';
import { TaskItem } from 'src/nodes/task-items/entities/task-item.entity';

@InputType()
export class CreateTaskInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => [TaksItemCreateInput],{ nullable: true })
  items: TaksItemCreateInput[];
}

//Forced to use duplicated declartion to prevent crashing : https://github.com/MichalLytek/type-graphql/issues/76
@InputType()
class TaksItemCreateInput
{
  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  isDone: boolean;
}