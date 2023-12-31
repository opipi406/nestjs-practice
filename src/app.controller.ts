import { Controller, Get, Query } from '@nestjs/common';
import { HeavyQueryDTO, HeavyResponseDTO } from 'src/dto/heavy';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('heavy')
  getHeavyResource(@Query() query: HeavyQueryDTO): Promise<HeavyResponseDTO> {
    return this.appService.getHeavyResource(query.time);
  }
}
