import { IsNotEmpty, IsString } from 'class-validator';

export class PostDto {
  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsString()
  authorId: string;

  @IsString()
  groupId: string;
}
