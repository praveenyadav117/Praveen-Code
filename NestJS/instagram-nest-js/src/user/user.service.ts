import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'praveen',
    },
  ];

  getUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('user not found');
    }
    return user;
  }
  getUsers() {
    return this.users;
  }
  addUser(user: UserDto) {
    const id = Date.now();
    this.users.push({
      id,
      ...user,
    });
    return this.getUser(id);
  }
}
