import {
  Controller,
  Get,
  Post,
  Res,
  Req,
  HttpCode,
  HttpStatus,
  Redirect,
  Param,
  Query,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { of } from 'rxjs';
import { query, Request, Response } from 'express';
import { CreateUserDTO } from './dto';

interface QueryParams {
  name: 'Ayush';
  age: 19;
}

let User = [];

@Controller('/api')
export class UserController {
  @Post('/profile')
  //   @Redirect('/api/test')
  @HttpCode(HttpStatus.ACCEPTED)
  getProfile(@Req() req: Request) {
    return {
      hello: 'Hi',
    };
  }
  @Get('/test')
  getRedirect() {
    return {
      test: 'test User 1 ',
    };
  }

  //Params Request
  @Get('/video/:id')
  getVideos(@Param() params: Record<string, any>) {
    console.log(params);
    return 'Success';
  }

  //Query Parameters
  @Get('/video')
  getVideo(@Query() query: QueryParams) {
    console.log(query);
    return 'Success';
  }

  @Post('/task')
  //@Body = req.body in nest.js
  getTask(@Body() requestData: Record<string, any>) {
    console.log(requestData);
    return { success: true };
  }

  // Simple CURD Operation

  @Post('/add')
  addUser(@Body() createUserDto: CreateUserDTO) {
    User.push(createUserDto);
    return 'User-added';
  }

  @Get('/user')
  getUser() {
    return User;
  }

  @Get('/user/:id')
  singleUser(@Param('id') id: number) {
    return User.find((user) => user.id === +id);
  }

  @Put('/user/:id')
  updateUser(@Param('id') id: number, @Body() updateUserDto = CreateUserDTO) {
    const userIndex = User.findIndex((user) => user.id === +id);
    if (!userIndex) {
      return 'Please Add User';
    }
    User[userIndex] = updateUserDto;
    return 'Success';
  }

  @Delete('/user/:id')
  deleteUser(@Param('id') id: number) {
    User = User.filter((user) => user.id !== +id);
  }
}
