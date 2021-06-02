import { Test, TestingModule } from '@nestjs/testing';
import { StrocktidoService } from './strocktido.service';

describe('StrocktidoService', () => {
  let service: StrocktidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrocktidoService],
    }).compile();

    service = module.get<StrocktidoService>(StrocktidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
