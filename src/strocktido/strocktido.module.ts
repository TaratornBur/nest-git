import { Module } from '@nestjs/common';
import { StrocktidoService } from './strocktido.service';
import { StrocktidoController } from './strocktido.controller';

@Module({
  controllers: [StrocktidoController],
  providers: [StrocktidoService]
})
export class StrocktidoModule {}
