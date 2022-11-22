import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log(`[server]: Server is running at ${process.env.PORT}`);
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
