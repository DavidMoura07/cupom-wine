import { Controller, Get, Param, Header, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  returnImage( @Res() res) {
    return res.sendFile('post1.png', {root: 'img'});
  }

  @Get(':cupom')
  @Header('content-type', 'image/png')
  async addCupom(@Param() param: { cupom: string }, @Res() res) {
    await this.appService.editImage(param.cupom);
    return res.sendFile('postEdited.png', {root: 'img'});
  }
}
