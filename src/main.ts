import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8080);
  console.log("🚀 Backend API corriendo en http://localhost:3005");
}
bootstrap();
