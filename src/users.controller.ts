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
  Redirect,
} from '@nestjs/common';
import { of } from 'rxjs';
import { Request, Response } from 'express';

@Controller('/users')
export class UsersController {
  @Post('/profile')
  @Header('Cache-Control', 'none')
  @Header('X-Name', 'Sazzad')
  @HttpCode(200)
  @Redirect('/users/account', 302)
  getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.status(201);
    const rn = ~~(Math.random() * 10 + 1);
    if (rn < 5) {
      return of({
        url: '/users/account',
        statusCode: 302,
      });
    } else {
      return of({
        url: '/users/wallet',
        statusCode: 302,
      });
    }
  }
  @Get('/account')
  redirectRoute() {
    return 'Working Account';
  }
  @Get('/wallet')
  redirectWallet() {
    return 'Working Wallet';
  }
}
