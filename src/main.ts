import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('LAR - Lugar de apoio e recomeço')
    .setDescription(
      'LAR (Lugar de Apoio e Recomeço) é um site para as pessoas se aprofundarem com informações sobre doenças psicológica e tipos de Abusos. A agenda 2030 – plano de ação global para atingir o mundo melhor e sustentável – tem como objetivo a ODS 3 (Objetivo de Desenvolvimento Sustentável) que Visa assegurar uma vida saudável e promover o bem-estar para todas as pessoas em todas as idades',
    )
    .setVersion('1.0')
    .addTag('usuarios')
    .addTag('Instituição')
    .addTag('FormularioPrecisoAjuda')
    .addTag('FormularioQueroAjudar')
    .addTag('FormularioFaleConosco')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
