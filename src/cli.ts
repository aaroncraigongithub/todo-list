import { CommandFactory } from 'nest-commander';
import { AppModule } from './cli.module';

async function bootstrap() {
  await CommandFactory.run(AppModule);
}

bootstrap();
