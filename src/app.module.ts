import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { IpController } from './ipDomain.controller';
import { RoutingHttpController } from './RoutingHttpMethods.controller';
import { UsersController } from './users.controller';
import { UserDataController } from './usersData.controller';
import { VideosController } from './videos.controller';
import { UsersStore } from './stores/users.store';
import { UsersStoreController } from './usersStore.controller';
import { Store } from './stores/store';
import { UsersTwoController } from './usersTwo.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [
    UsersController,
    AlbumsController,
    VideosController,
    UserDataController,
    RoutingHttpController,
    IpController,
    UsersStoreController,
    UsersTwoController,
  ],
  providers: [
    UsersStore,
    { provide: Store, useExisting: UsersStore },
    UsersService,
  ],
})
export class AppModule {}
