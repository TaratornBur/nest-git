import { Test, TestingModule } from '@nestjs/testing';
import { StrocktidoController } from './strocktido.controller';
import { StrocktidoService } from './strocktido.service';

describe('StrocktidoController', () => {
  let controller: StrocktidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrocktidoController],
      providers: [StrocktidoService],
    }).compile();

    controller = module.get<StrocktidoController>(StrocktidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
