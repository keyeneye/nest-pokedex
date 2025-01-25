import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      //Esto es para que convierta los tipos de datos a los que se le indique o infiera
      //Contras: Puede que no se comporte como se espera y consume mas tiempo por que hace la conversion a todos los datos que le llegan
      // transform: true,
      // transformOptions: {
      //   enableImplicitConversion: true,
      // },
      //
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
