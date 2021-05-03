import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import config from '../config';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: config.staticPath,
    }),
    MongooseModule.forRoot(config.database),
    UserModule
  ],
})
export class AppModule {}
