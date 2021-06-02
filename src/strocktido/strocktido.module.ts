import { Module } from '@nestjs/common';
import { StrocktidoService } from './strocktido.service';
import { StrocktidoController } from './strocktido.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Strock, StrockSchema } from './schema/strock.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Strock.name, schema: StrockSchema}])],
  controllers: [StrocktidoController],
  providers: [StrocktidoService]
})
export class StrocktidoModule {}
