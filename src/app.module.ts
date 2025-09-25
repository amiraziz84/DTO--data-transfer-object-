import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { ExceptionController } from './exception/exception.controller';

@Module({
  imports: [BooksModule, CustomerModule],
  controllers: [AppController, MynameController, ExceptionController],
  providers: [AppService],
})
export class AppModule {}
