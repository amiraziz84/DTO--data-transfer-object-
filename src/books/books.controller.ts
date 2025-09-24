import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor (private readonly booksService: BooksService)
    {};

    @Get()
    getAll(){
        return this.booksService.getAllbooks();
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.booksService.getbooksById(Number(id));
    }

    @Post()
    create(@Body() body: {name: string; pages: number}){
        return this.booksService.createBook(body);
    }
}
