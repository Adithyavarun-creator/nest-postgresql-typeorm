import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUser() {
    return this.userService.findAll();
  }
  @Post()
  createUser(@Body() body) {
    const { email, password } = body;
    return this.userService.create(email, password);
  }
}
