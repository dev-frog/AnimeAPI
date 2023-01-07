import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class GroupUpdateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsString()
  center: Array<string>;

  @IsString()
  groupType: GroupType;

  @IsString()
  backgroundImage: string;

  @IsArray()
  activity: Array<string>;

  @IsArray()
  members: Array<string>;

  @IsArray()
  posts: Array<string>;

  @IsString()
  adminId: string;

  @IsString()
  id: string;
}

enum GroupType {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
