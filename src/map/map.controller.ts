import { Controller, Get, Param } from '@nestjs/common';
import { MapDTO } from 'src/dto/map';

import { MapService } from './map.service';

@Controller('map')
export class MapController {
  constructor(private mapService: MapService) {}

  @Get()
  findMaps(): MapDTO[] {
    return this.mapService.findMaps();
  }

  @Get(':id')
  getMap(@Param('id') id: number): MapDTO {
    return this.mapService.getMap(Number(id));
  }
}
