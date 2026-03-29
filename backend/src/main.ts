import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow larger JSON payloads for profile avatar uploads (base64 data URLs).
  app.use(json({ limit: '6mb' }));
  app.use(urlencoded({ limit: '6mb', extended: true }));

  // Enable CORS
  app.enableCors();

  // Enable global validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  await app.listen(process.env.PORT ?? 3001);
  console.log(`Application is running on: http://localhost:${process.env.PORT ?? 3001}`);
}
bootstrap();

