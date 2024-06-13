import { Test, TestingModule } from '@nestjs/testing';
import { List, ListService } from './list.service';

describe('ListService', () => {
  let service: ListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListService],
    }).compile();

    service = module.get<ListService>(ListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find', () => {
    let list: List;

    beforeEach(() => {
      list = { id: '1', label: 'List 1', todos: [] };

      service.create(list);
    });

    it('should find a list', () => {
      expect(service.find('1')).toBe(list);
    });
  });
});
