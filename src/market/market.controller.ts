import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MarketService } from './market.service';
import { CreateDataDto } from './dto/create-data.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('market') // 设置swagger文档用的,标记路由所属模块,用于区分api.
@Controller('market') // 设置该模块的路由位置
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Get()
  getMock(): string {
    return this.marketService.getMock();
  }

  @Get('getMock1')
  getMock1() {
    return this.marketService.getMock1();
  }

  @Post('queryMock1')
  @UsePipes(new ValidationPipe({ transform: true }))
  queryMock1(@Body() data: CreateDataDto) {
    return this.marketService.queryMock1(data);
  }
}
