import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketService } from './market.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('market') // 设置swagger文档用的,标记路由所属模块,用于区分api.
@Controller('market') // 设置该模块的路由位置
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Post() // 声明接口的请求类型
  create(@Body() createMarketDto: CreateMarketDto) {
    return this.marketService.create(createMarketDto);
  }

  @Get()
  findAll() {
    return this.marketService.findAll();
  }

  @Get('getApiOne')
  getApiOne(){
    return this.marketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarketDto: UpdateMarketDto) {
    return this.marketService.update(+id, updateMarketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marketService.remove(+id);
  }
}
