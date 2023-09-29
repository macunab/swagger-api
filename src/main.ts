import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Conf
  const options = new DocumentBuilder()
    .setTitle('Listado de facturas con swagger')
    .setDescription('API REST para listado de facturas')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // Swagger doc route
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
