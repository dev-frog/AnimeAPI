import { IsNotEmpty, IsString } from 'class-validator';

export class CommentUpdateDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  comment: string;

  @IsString()
  authorId: string;

  @IsString()
  postId: string;
}
