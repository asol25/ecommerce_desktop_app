import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
async function bootstrap() {
  const port = process.env.PORT || 33714
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
}
bootstrap();
  