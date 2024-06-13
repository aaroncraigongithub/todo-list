import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger();

  use(req: any, res: any, next: () => void) {
    this.logger.log('Request...');
    next();
  }
}
