import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import process from 'process';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(33714);
}
bootstrap();
  