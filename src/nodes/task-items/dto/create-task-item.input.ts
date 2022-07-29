import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
