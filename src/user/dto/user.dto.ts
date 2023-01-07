import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  lang: string;

  @IsNumber()
  points: number;

  @IsString()
  usertype: string;
}
