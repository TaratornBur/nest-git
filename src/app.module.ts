import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StrocktidoModule } from './strocktido/strocktido.module';

@Module({
  imports: [StrocktidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
