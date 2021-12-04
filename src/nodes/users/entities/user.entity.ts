import { ObjectType, Field, Int } from '@nestjs/graphql';

//Type of node inside the graph
@ObjectType()
export class User {
  @Field(() => Int)
  exampleField: number;
}
