import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStrocktidoDto } from './dto/create-strocktido.dto';
import { UpdateStrocktidoDto } from './dto/update-strocktido.dto';
import { Strock, StrockDocument } from './schema/strock.schema';

@Injectable()
export class StrocktidoService {
  
  create(createStrocktidoDto: CreateStrocktidoDto) {
    return 'This action adds a new strocktido';
  }

  findAll() {
    return `This action returns all strocktido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} strocktido`;
  }

  update(id: number, updateStrocktidoDto: UpdateStrocktidoDto) {
    return `This action updates a #${id} strocktido`;
  }

  remove(id: number) {
    return `This action removes a #${id} strocktido`;
  }
}
