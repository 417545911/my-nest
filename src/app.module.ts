import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketModule } from './market/market.module';

@Module({
  imports: [MarketModule],
  //  imports 属性用于指定当前模块所依赖的其他模块
  controllers: [AppController],
  // controllers 属性用于指定当前模块中的控制器类。控制器负责处理传入的请求，并返回响应。包括处理权限校验、处理 VO、处理异常等
  providers: [AppService],
  //  providers 属性用于指定当前模块中的提供者。提供者负责创建和管理依赖注入的实例
})
export class AppModule {}
