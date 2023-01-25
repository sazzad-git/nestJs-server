import { Injectable } from '@nestjs/common';

let instanceCount = 2;

@Injectable()
export class Store {
  private instanceN: number;

  constructor() {
    this.instanceN = instanceCount++;
    console.log(`Users store init instance(${this.instanceN})`);
  }

  getStore() {
    return `I am UsersStore ${this.instanceN}`;
  }
}
