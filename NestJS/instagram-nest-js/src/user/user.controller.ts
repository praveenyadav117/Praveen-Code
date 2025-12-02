import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Post,
  Body,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
// import { ValidationTypes } from 'class-validator';
// import { NotFoundError } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: string) {
    try {
      return this.userService.getUser(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @Post()
  addUser(@Body(new ValidationPipe()) user: UserDto) {
    return this.userService.addUser(user);
  }
}
