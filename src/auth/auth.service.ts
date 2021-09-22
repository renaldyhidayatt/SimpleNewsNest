import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async Login(email, password) {
    let user = await this.userService.findEmail(email);
    if (user) {
      const valid = await this.userService.comparePassword(
        password,
        user.password,
      );

      if (valid) {
        return user;
      } else {
        throw new BadRequestException({
          message: 'Error Password',
        });
      }
    } else {
      throw new BadRequestException({
        message: 'Email not found',
      });
    }
  }

  generateToken(user: any) {
    let dataToken = {
      id: user.id,
      role: user.role,
    };
    let token = this.jwtService.sign(dataToken);
    return {
      token: token,
    };
  }
}
