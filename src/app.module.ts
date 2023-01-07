import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommunityModule } from './community/community.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [
    UserModule,
    BookmarkModule,
    PrismaModule,
    CommunityModule,
    ActivityModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
