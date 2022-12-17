import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmpty,
  IsOptional,
} from 'class-validator';
import { User } from 'src/users/user.entity';

export class CreateBookDTO {
  @IsEmpty({ message: 'You cannot provide id' })
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsEmpty({ message: 'You cannot provide id' })
  user: User;
}

export class UpdateBookDTO {
  @IsEmpty({ message: 'You cannot provide id' })
  id: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  author: string;

  @IsEmpty({ message: 'You cannot provide id' })
  user: User;
}
