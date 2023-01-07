import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class PostUpdateDto {
  @IsString()
  slug: string;

  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsString()
  authorId: string;

  @IsString()
  groupId: string;

  @IsNotEmpty()
  @IsString()
  id: string;
}
