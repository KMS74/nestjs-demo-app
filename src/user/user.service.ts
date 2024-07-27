import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  // array of users
  private readonly users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  // takes an argument of type User and omitting the id
  // It generates a new id for the user and adds the user to the array of users
  create(userDto: CreateUserDto): User {
    const user: User = { ...userDto, id: this.users.length + 1 };
    this.users.push(user);
    return user;
  }

  update(id: number, userDto: UpdateUserDto): User {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index] = { ...user, ...userDto };
    return this.users[index];
  }
}

/* 
 - Services are classes that contain the core logic of your application, 
 like handling user actions.

 - The service classes are annotated with the @Injectable decorator so that they can be
  injected into controllers or other services using the dependency injection system.

*/
