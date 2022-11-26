import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";
async function bootstrap() {
  const PORT = process.env.PORT || 33714;
  const app = await NestFactory.create(AppModule);
  console.log("Application run at PORT: " + PORT);

  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
