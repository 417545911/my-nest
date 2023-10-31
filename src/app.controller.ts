import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// 程序路由，接口来源地

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
