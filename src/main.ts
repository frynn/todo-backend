import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Prisma } from '@prisma/client';

declare module 'express' {
  interface Request {
    user?: Prisma.UserGetPayload<Prisma.UserDefaultArgs>;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}

bootstrap();
