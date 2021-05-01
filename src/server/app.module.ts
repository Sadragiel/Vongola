import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../public'),
    }),
    MongooseModule.forRoot('mongodb+srv://vongola:alognov@cluster0.n6lot.mongodb.net/vongola?retryWrites=true&w=majority'),
    UserModule
  ],
})
export class AppModule {}
