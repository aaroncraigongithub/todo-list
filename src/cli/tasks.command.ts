import { Command, CommandRunner, Option } from 'nest-commander';
import { Inject } from '@nestjs/common';
import { ListService } from '../list/list.service';

@Command({
  name: 'create-list',
  arguments: '<list-name>',
  // options: { isDefault: true },
})
export class TaskRunner extends CommandRunner {
  constructor(@Inject(ListService) private listService: ListService) {
    super();
  }

  async run(
    inputs: string[] /*, options: Record<string, any> */,
  ): Promise<void> {
    this.listService.create({
      id: '1',
      label: inputs[0],
      todos: [],
    });

    console.log(`${inputs[0]} created`);
  }

  @Option({
    flags: '-p, --is-private <boolean>',
    description: 'Set the list as private',
  })
  parseTitle(value: string): boolean {
    return JSON.parse(value);
  }
}
