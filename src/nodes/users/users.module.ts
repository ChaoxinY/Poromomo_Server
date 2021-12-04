import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

//Abstract facade that provides references for the main component 
@Module({
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
