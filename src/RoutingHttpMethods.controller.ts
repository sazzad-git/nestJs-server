import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Req,
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserDTO } from './dto';

const USERS = [];

@Controller('/users')
export class RoutingHttpController {
  @Post()
  addUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    console.log(createUserDto);
    return 'users added';
  }
  @Get()
  getUser() {
    return USERS;
  }
  @Get(':id')
  getUser(@Param(':id') id: number) {
    return USERS.find((user) => user.id === +id);
  }
}
