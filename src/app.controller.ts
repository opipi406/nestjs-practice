import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { HeavyQueryDTO } from 'dto/heavy';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('heavy')
  getHeavyResource(@Query() query: HeavyQueryDTO): Promise<string> {
    return this.appService.getHeavyResource(query.time);
  }
}
