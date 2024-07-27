import { Injectable, OnModuleInit } from '@nestjs/common';
/*
 - Lifecycle are different stages of an application (initialization, starting, and stopping).
 - NestJS provides hooks that allow you to run code at those specific moments. 
 - These hooks can be used to perform tasks such as connecting to a database, setting up the configuration, or starting a background task.
 - NestJS Life Cycle Hook:-
    1) OnModuleInit—called when the host module has been initialized
    2) OnApplicationBootstrap — called when the application has fully started
    3) OnModuleDestroy—called just before the host module is destroyed
    4) OnApplicationShutdown— called when the application shuts down

 - Usually, lifecycle are implemented in Services or Providers

*/

@Injectable()
export class UserLifeCycle implements OnModuleInit {
  onModuleInit() {
    console.log(`The module has been initialized.`);
  }
}
