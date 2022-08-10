import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { TaskItem } from 'src/nodes/task-items/entities/task-item.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  description: string;

  @Field(() => [TaskItem], { nullable: true })
  @OneToMany(() => TaskItem, (taskItem) => taskItem.task, { eager: true })
  taskItems: TaskItem[]
}
