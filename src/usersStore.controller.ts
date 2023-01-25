import { Controller, Inject, Optional } from '@nestjs/common';
import { Store } from './stores/store';
import { UsersStore } from './stores/users.store';

@Controller('/users')
export class UsersStoreController {
  constructor(private store: Store) {
    console.log(this.store);
  }
}
