import { Module } from '@nestjs/common';
import { AlbumController } from './alboum.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController, AlbumController],
})
export class AppModule {}
