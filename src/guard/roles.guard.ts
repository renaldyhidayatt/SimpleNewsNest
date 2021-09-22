import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor() {}

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (user.role == 'admin') {
      return true;
    }

    throw new HttpException(
      'Unauthorized access role',
      HttpStatus.UNAUTHORIZED,
    );
  }
}
