import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private repo: Repository<Book>,
  ) {}

  create(book: Book, user): Promise<Book> {
    const bookObj = this.repo.create({
      name: book.name,
      author: book.author,
      price: book.price,
      user: user.id,
    });
    return this.repo.save(bookObj);
  }

  async findAll(): Promise<Book[]> {
    return await this.repo.find();
  }

  async findOne(id: any): Promise<Book> {
    const book = await this.repo.findOneBy({ id });
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  async updateBook(id: any, body: Book): Promise<Book> {
    const book = await this.repo.findOneBy({ id });
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    Object.assign(book, body);
    return this.repo.save(book);
  }

  async deleteBook(id: any) {
    const book = await this.repo.findOneBy({ id });
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return this.repo.remove(book);
  }
}
