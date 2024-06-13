import { Test, TestingModule } from '@nestjs/testing';
import { ListController } from './list.controller';
import { List, ListService } from './list.service';

describe('ListController', () => {
  let controller: ListController;
  let listService: ListService;
  let list: List;

  beforeEach(async () => {
    list = { id: '1', label: 'List 1', todos: [] };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListController],
      providers: [ListService],
    }).compile();

    listService = module.get<ListService>(ListService);
    jest.spyOn(listService, 'find').mockImplementation(() => list);

    controller = module.get<ListController>(ListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/list', () => {
    beforeEach(() => {});

    it('should return a list with id 1', () => {
      expect(controller.find('1')).toBe(list);
    });
  });
});
