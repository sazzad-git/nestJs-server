import { Controller, Get, Post, Put, Delete, Patch, Req } from '@nestjs/common';
import { of } from 'rxjs';
import { Request } from 'express';

@Controller('/users')
export class UsersController {
  @Put('/profile')
  getProfile(@Req() req: Request) {
    return of({
      hello: 'World',
    });
  }
}
