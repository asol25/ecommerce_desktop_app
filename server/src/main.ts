import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const PORT = process.env.PORT || 33714;
  console.log(
    "🚀 ~ file: main.ts:7 ~ bootstrap ~ PORT",
    process.env.DATABASE_PORT,
  );
  const app = await NestFactory.create(AppModule, {
    logger: ["error", "warn", "log"],
  });
  const config = new DocumentBuilder()
    .setTitle("OD_COURSES")
    .setDescription("The Courses API description")
    .setVersion("1.0")
    .addTag("Courses")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
