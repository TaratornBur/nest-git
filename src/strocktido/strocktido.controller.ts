import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StrocktidoService } from './strocktido.service';
import { CreateStrocktidoDto } from './dto/create-strocktido.dto';
import { UpdateStrocktidoDto } from './dto/update-strocktido.dto';

@Controller('strocktido')
export class StrocktidoController {
  constructor(private readonly strocktidoService: StrocktidoService) {}

  @Post()
  create(@Body() createStrocktidoDto: CreateStrocktidoDto) {
    return this.strocktidoService.create(createStrocktidoDto);
  }

  @Get()
  findAll() {
    return this.strocktidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.strocktidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStrocktidoDto: UpdateStrocktidoDto) {
    return this.strocktidoService.update(+id, updateStrocktidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.strocktidoService.remove(+id);
  }
}
