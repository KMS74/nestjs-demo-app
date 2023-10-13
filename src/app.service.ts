import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAppInfo() {
    return 'This is my first Nestjs App';
  }
}
