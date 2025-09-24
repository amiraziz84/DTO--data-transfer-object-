import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [BooksModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
