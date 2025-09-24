import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
import { ValidationPipe } from '@nestjs/common';
// singal middleware
function globalMiddlewareOne(req: Request, res: Response, next: NextFunction){
  console.log('this is a global middleware number 1');
  next();
}
// multipal middleware
function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction){
  console.log('this is a global middleware number 2');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Register middleware
  app.use(globalMiddlewareOne);
  app.use(globalMiddlewareTwo);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
