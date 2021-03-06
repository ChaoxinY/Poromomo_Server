import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

//Type of node inside the graph (includes orm for the same variables)
@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({
    length: 100
  })
  @Field(() => String)
  name: string;
}
