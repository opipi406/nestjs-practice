import { Injectable } from '@nestjs/common';
import { MapDTO } from 'src/dto/map';

import { mockData } from './mock-data';

@Injectable()
export class MapService {
  findMaps(): MapDTO[] {
    return mockData;
  }

  getMap(id: number): MapDTO {
    return mockData.find((map) => map.id === id);
  }
}
