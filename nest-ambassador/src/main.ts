import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
    origin: [
      'http://localhost:4000',
      'http://localhost:4100',
      'http://localhost:4200',
      'http://localhost:4300',
      'http://crame.link',
    ],
    credentials: true,
  });
  await app.listen(8000);
}

bootstrap();
