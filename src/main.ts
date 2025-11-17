import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
  });
  await app.listen(process.env.PORT || 8080);
  console.log(`🚀 Backend API corriendo en http://localhost:${process.env.PORT || 8080}`);
}
bootstrap();
