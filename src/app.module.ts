import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { UsersController } from './users.controller';
import { VideosController } from './videos.controller';

@Module({
  controllers: [UsersController, AlbumsController, VideosController],
})
export class AppModule {}
