import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(email: string, password: string) {
    // see if email is use
    const user = await this.usersService.find(email);
    if (user.length) {
      throw new BadRequestException('email already use');
    }

    // hash user password
    // create new user
    // return the user
  }

  signin() {}
}
