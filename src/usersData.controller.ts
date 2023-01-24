import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Req,
  Body,
} from '@nestjs/common';

@Controller('/users')
export class UserDataController {
  @Post('/video')
  getProfile(@Body() requestData: Record<string, any>) {
    console.log(requestData);
    return { success: true };
  }
}
