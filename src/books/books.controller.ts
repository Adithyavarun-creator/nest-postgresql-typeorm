import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Book } from './book.entity';
import { CreateBookDTO, UpdateBookDTO } from './bookdto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  createBook(@Body() body: CreateBookDTO): Promise<Book> {
    const user = {
      email: 'user@mail.com',
      password: 'user123',
      id: '5de13d59-1f04-43cf-92af-e0a22cde1a8a',
    };
    return this.bookService.create(body, user);
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  updateById(
    @Param('id') id: string,
    @Body() body: UpdateBookDTO,
  ): Promise<Book> {
    return this.bookService.updateBook(id, body);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
