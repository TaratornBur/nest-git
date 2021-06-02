import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStrocktidoDto } from './dto/create-strocktido.dto';
import { UpdateStrocktidoDto } from './dto/update-strocktido.dto';
import { Strock, StrockDocument } from './schema/strock.schema';

@Injectable()
export class StrocktidoService {
  constructor(@InjectModel(Strock.name) private strockModel: Model<StrockDocument>){ }
  create(createStrocktidoDto: CreateStrocktidoDto):Promise<Strock> {
    console.log(createStrocktidoDto);

    const createdStrocktidoDto = new this.strockModel(createStrocktidoDto);
    console.log(createdStrocktidoDto);
    
    return createdStrocktidoDto.save();
  }

  async findAll():Promise<Strock[]> {
    return await this.strockModel.find();
  }

  async findOne(id: string):Promise<Strock> {
    return await this.strockModel.findById(id);
  }

  async update(id: string, updateStrocktidoDto: UpdateStrocktidoDto) {
    console.log(id);
    
    console.log(updateStrocktidoDto);

    return await this.strockModel.findByIdAndUpdate(id, updateStrocktidoDto,{ new: true});
  }

  async remove(id: number) {
    return await this.strockModel.deleteOne({"_id": id});
  }
}
