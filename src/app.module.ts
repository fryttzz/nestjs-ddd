import { Module } from '@nestjs/common';
import { UserModule } from './Modules/User.module';

@Module({
  imports: [UserModule],
})
export class AppModule { }
