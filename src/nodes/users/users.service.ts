import { Injectable } from '@nestjs/common';
import { Task } from 'src/database/entity/task';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Connection } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
//Buisness logic happens here, what should be done with the given information.
export class UsersService {

  constructor(private connection: Connection) {}

  create(createUserInput: CreateUserInput) {
    let user:User ={id:1,name:"qwd"}
    return createUserInput.name;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    let user:User ={id:1,name:"qwd"};

    let userRepository = this.connection.getRepository(User);
    let userfound = userRepository.find({ where: { id: 1} })
    console.log(userfound)
    return userfound;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
