import { Controller, Get, Post, Put, Delete, Patch, Req } from '@nestjs/common';
import { of } from 'rxjs';
import { Request } from 'express';

@Controller('/albums')
export class AlbumsController {
  @Get()
  getProfile(@Req() req: Request) {
    return 'Photo';
  }
}
