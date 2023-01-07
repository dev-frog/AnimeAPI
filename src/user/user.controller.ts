import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
  @Post('/')
  async create(@Body() dto: UserDto) {
    return this.UserService.create(dto);
  }

  @Get('/')
  async findAll() {
    return this.UserService.findAll();
  }

  // search user by name
  @Post('/search')
  async searchUserbyName(@Body() search: string) {
    return this.UserService.searchUserbyName(search);
  }
}
