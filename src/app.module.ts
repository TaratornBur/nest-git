import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StrocktidoModule } from './strocktido/strocktido.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://root:1234@cluster0.4bzcc.mongodb.net/Test1?retryWrites=true&w=majority'
    ),StrocktidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
