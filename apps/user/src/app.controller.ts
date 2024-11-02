import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  @MessagePattern({ cmd: 'get_user' })
  getUser() {
    return { data: 'Data from User Service' };
  }
}
