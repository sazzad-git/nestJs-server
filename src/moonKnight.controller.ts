import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Req,
  Inject,
} from '@nestjs/common';
import { Config } from './config';

@Controller('/users')
export class MoonKnightController {
  constructor(private config: Config) {
    console.log(this.config);
  }
}
