import { InputType, Int, Field } from '@nestjs/graphql';

//Declare what information is required when submitting a request.
@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'userName' })
  name: string;
}
