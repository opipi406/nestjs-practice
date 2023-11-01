import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CorsMiddleware } from 'src/middleware/cors.middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapModule } from './map/map.module';

@Module({
  imports: [MapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
