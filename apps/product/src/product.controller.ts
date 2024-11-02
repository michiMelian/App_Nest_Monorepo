import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductController {
  @MessagePattern({ cmd: 'get_data' })
  getData() {
    return { data: 'Data from Product Service' };
  }
}
