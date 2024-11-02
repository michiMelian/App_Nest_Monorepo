import { Controller, Get } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  private clientProduct: ClientProxy;
  private clientUser: ClientProxy;

  constructor() {
    this.clientProduct = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 4000,
      },
    });

    this.clientUser = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 5000,
      },
    });
  }

  @Get('product')
  getProductData() {
    console.log('hola');
    return this.clientProduct.send({ cmd: 'get_data' }, {});
  }

  @Get('user')
  getUserData() {
    return this.clientUser.send({ cmd: 'get_user' }, {});
  }
}
