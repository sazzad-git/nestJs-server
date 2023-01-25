import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { RoutingHttpController } from './RoutingHttpMethods.controller';
import { UsersController } from './users.controller';
import { UserDataController } from './usersData.controller';
import { VideosController } from './videos.controller';

@Module({
  controllers: [
    UsersController,
    AlbumsController,
    VideosController,
    UserDataController,
    RoutingHttpController,
  ],
})
export class AppModule {}
