import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { port: 4000 },
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { port: 5000 },
  });

  await app.listen(3000);
}
bootstrap();
