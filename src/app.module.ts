import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController, AlbumsController],
})
export class AppModule {}
