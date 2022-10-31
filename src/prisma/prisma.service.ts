import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb+srv://frog:frogdb31337@cluster0.fztbpfv.mongodb.net/anime_list?retryWrites=true&w=majority',
        },
      },
    });
  }
}
