import { Controller, Get, Post, Param, Body, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { Logger } from './logger.provider';
import { UserDto } from './user.dto';
import { User } from './user.model';
import { EnrichedUserPipe } from './user.pipe';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logger: Logger,
  ) {}

  @Get()
  findAll(): User[] {
    this.logger.log('Get all users');
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.log(`Getting user by id ${id}`);
    return this.userService.findOne(+id);
  }
  @Post()
  @UsePipes(new EnrichedUserPipe())
  create(@Body() userDto: UserDto) {
    this.logger.log(`Creating user with name ${userDto.name}`);
    const user = this.userService.create(userDto);
    return user;
  }
}

/*
 - Controllers are responsible for handling incoming requests and returning responses to the client. 
 - Controllers define the routes and associated request handlers that allow somebody to interact with your application.
 - Each controller is a class annotated with the @Controller decorator,
   which specifies the base route for all the routes defined in the controller.
 - The controller class contains methods that handle incoming requests. 
  These methods are annotated with the HTTP verb (like @Get, @Post, @Delete, @Put) and the sub-route that they handle.


*/
