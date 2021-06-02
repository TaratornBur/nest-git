import { PartialType } from '@nestjs/mapped-types';
import { CreateStrocktidoDto } from './create-strocktido.dto';

export class UpdateStrocktidoDto extends PartialType(CreateStrocktidoDto) {}
