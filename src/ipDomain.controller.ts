import { Controller, Get, Ip } from '@nestjs/common';

@Controller('users')
export class IpController {
  @Get('ip')
  findIp(@Ip() ip: string) {
    return { ip };
  }
}
