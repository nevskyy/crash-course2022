import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Oleks', email: 'oleks@ukr.net', phone: '0663591467' },
    { username: 'Dan', email: 'dan@ukr.net', phone: '0663591467' },
    { username: 'Nik', email: 'nik@ukr.net', phone: '0663591468' },
    { username: 'Gerk', email: 'ger@ukr.net', phone: '0663591469' },
    { username: 'Slim', email: 'sli@ukr.net', phone: '0663591465' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return {
      id,
      username: 'Petro',
      email: 'petro@ukr.net',
      phone: '3666777',
    };
    // return null;
  }
}
