import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async singup(dto: AuthDto) {
    const _hash = await argon.hash(dto.password);
    const user = await prisma.user.create({
      data: {
        email: dto.email,
        hash: _hash,
      },
      select: {
        id: true,
        email: true,
        createAt: true,
      },
    });
    return user;
  }

  singin() {
    return 'singin';
  }
}
