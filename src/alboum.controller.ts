import { Controller, Get, Req } from '@nestjs/common';

@Controller('/albums')
export class AlbumController {
  @Get('/photo')
  getAlbum(@Req() req: Request) {
    return 'Hi';
  }
}
