import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Req,
  Param,
  Query,
  Headers,
} from '@nestjs/common';

interface queryParams {
  name: string;
  age: number;
}
// interface videosParams {
//   id: number;
//   name: string;
// }

@Controller('/users')
export class VideosController {
  @Get('/videos')
  getVideos(@Headers('user-agent') headers: Record<string, any>) {
    console.log(headers);
    return 'success';
  }
}

/*
@Controller('/users')
export class VideosController {
  @Get('/videos')
  getVideos(@Query() query: queryParams) {
    console.log(query);
    return 'success';
  }
}
*/

/*
export class VideosController {
  @Get('/videos/:id/:name')
  getVideos(@Param() params: videosParams) {
    console.log(params.id);
    return 'success';
  }
}
*/
