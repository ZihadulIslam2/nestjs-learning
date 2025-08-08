import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'IOH Leanne Graham',
      email: 'zihadul@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Leanne Graham',
      email: 'zihadul@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Leanne Graham',
      email: 'zihadul@gmail.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Leanne Graham',
      email: 'zihadul@gmail.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Leanne Graham',
      email: 'zihadul@gmail.com',
      role: 'INTERN',
    },
    {
      id: 6,
      name: 'Leanne Graham',
      email: 'zihadul@gmail.com',
      role: 'INTERN',
    },
    {
      id: 7,
      name: 'Leanne Graham',
      email: 'zihadul@gmail.com',
      role: 'INTERN',
    },
    {
      id: 8,
      name: 'Leanne Graham',
      email: 'zihadul@gmail.com',
      role: 'INTERN',
    },
    {
      id: 9,
      name: 'Leanne Graham',
      email: 'zihadul@gmail.com',
      role: 'INTERN',
    },
    {
      id: 10,
      name: 'Leanne Graham',
      email: 'zihadul@gmail.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('Users not fount');

    return user;
  }

  create(createUserDto: CreateUserDto) {
    // GENARATE ID
    const userByHightId = [...this.users].sort((a, b) => b.id);

    const newUser = {
      id: userByHightId[0].id + 1,
      ...createUserDto,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(1, id, updateUserDto);
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removeUser;
  }
}
