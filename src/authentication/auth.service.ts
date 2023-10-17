import { BadRequestException, Injectable } from '@nestjs/common';
import { scrypt as _scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';
import { UsersService } from 'src/users/users.service';

const scrypt = promisify(_scrypt); // make promise version

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
    // generate salt
    const salt = randomBytes(8).toString('hex');
    // hash the salt and password together
    const hash = scrypt(password, salt, 32) as unknown as Buffer;
    // join the hash result and salt together
    const result = hash.toString('hex') + '.' + salt;
    // create new user
    // return the user
  }

  signin() {}
}
