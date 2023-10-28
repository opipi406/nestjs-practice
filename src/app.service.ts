import { Injectable, Query } from '@nestjs/common';

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
    return `Too heavy API (${time}sec)`;
  }
}
