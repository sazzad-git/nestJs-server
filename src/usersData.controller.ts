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

interface videoDTO {
  name: string;
  tag: string;
}

@Controller('/users')
export class UserDataController {
  @Post('/video')
  getProfile(@Body() requestData: videoDTO) {
    console.log(requestData);
    return { success: true };
  }
}
