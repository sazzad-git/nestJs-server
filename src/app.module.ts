import { Injectable, Module } from '@nestjs/common';
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
import { MoonKnightController } from './moonKnight.controller';
import { Config } from './config';
import { FactoryController } from './factoryProvider.controller';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

const IS_DEV_MODE = true;
@Injectable()
class EnvConfig {
  envType: 'DEV' | 'STATE' | 'PORT';

  constructor() {
    this.envType = 'DEV';
  }
}

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
    MoonKnightController,
    FactoryController,
  ],
  providers: [
    UsersStore,
    { provide: Store, useExisting: UsersStore },
    UsersService,
    { provide: 'DATABASE_NAME', useValue: 'MOON_KNIGHT' },
    {
      provide: Config,
      useValue: ['sazzadurrahman000@gmail.com', 'sazzad@gmail.com'],
    },
    {
      provide: 'EVENT_STORE',
      useFactory: async (config: EnvConfig, limit: number = 4) => {
        const eventBus$ =
          config.envType === 'DEV'
            ? new ReplaySubject(limit)
            : new BehaviorSubject(null);
        console.log(config, limit);
        return eventBus$;
      },
      inject: [EnvConfig, { token: 'LIMIT', optional: true }],
    },
    EnvConfig,
    {
      provide: 'LIMIT',
      useValue: 2,
    },
  ],
})
export class AppModule {}
