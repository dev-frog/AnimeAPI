import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(userData: UserDto) {
    return await this.prisma.users.create({
      data: {
        name: userData.name,
        email: userData.email,
        points: userData.points,
        lang: userData.lang,
        usertype: userData.usertype,
      },
    });
  }

  async findAll() {
    return await this.prisma.users.findMany({
      include: {
        groups: true,
      },
    });
  }

  // search user by name
  async searchUserbyName(search: string) {
    return await this.prisma.users.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
    });
  }
}
