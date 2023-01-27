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
import { Subject } from 'rxjs';

@Controller('/users')
export class FactoryController {
  constructor(@Inject('EVENT_STORE') private eventBus: Subject<any>) {
    console.log(this.eventBus);
  }
}
