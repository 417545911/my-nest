import { NestFactory } from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"
import { AppModule } from './app.module';

async function bootstrap() {
  const appOptions = {cors:true};
  const app = await NestFactory.create(AppModule,appOptions);
  app.setGlobalPrefix("api");

  const options = new DocumentBuilder()
      .setTitle("Nest API 模拟")
      .setDescription("前端模拟接口")
      .setVersion("1.0")
      .setBasePath("api")
      .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup("/docs",app,document)
  
  await app.listen(3000);
}
bootstrap();

