import { Get, Injectable, NotFoundException, Param, Post } from '@nestjs/common';

@Injectable()
export class BooksService {
    private books = [
        {id: 1, name: "interface design", pages: 225},
        {id: 2, name: "opp", pages: 365},
        
    ];
    getAllbooks(){
        return this.books;
    }
    getbooksById(id: number){
        const book = this.books.find((b) => b.id === id );
        if(!book) throw new NotFoundException('book not found!');
        return book;

    }

    // POST
    createBook(data: {name: string; pages: number}){
        const newBook = {
            id: Date.now(),
            ...data,
        };
        this.books.push(newBook);
        return newBook;
    }
}
