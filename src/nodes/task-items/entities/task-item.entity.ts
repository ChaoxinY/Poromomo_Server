import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Task } from 'src/nodes/tasks/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
@ObjectType()
export class TaskItem {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Boolean)
  isDone: boolean;

  @Field(() => [Task])
  @ManyToOne(() => Task, (task) => task.taskItems)
  task: Task;
}
