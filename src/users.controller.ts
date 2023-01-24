import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Req,
  HttpCode,
  HttpStatus,
  Res,
  Header,
} from '@nestjs/common';
import { of } from 'rxjs';
import { Request, Response } from 'express';

@Controller('/users')
export class UsersController {
  @Get('/profile')
  @Header('Cache-Control', 'none')
  @Header('X-Name', 'Sazzad')
  getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.status(201);
    return of({
      hello: 'World',
    });
  }
}
