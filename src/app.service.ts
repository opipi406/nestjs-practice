import { Injectable } from '@nestjs/common';
import { HeavyResponseDTO } from 'src/dto/heavy';

@Injectable()
export class AppService {
  async sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getHeavyResource(time: number) {
    await this.sleep(time * 1000);

    return new HeavyResponseDTO(`Too heavy API (${time}sec)`, time);
  }
}
