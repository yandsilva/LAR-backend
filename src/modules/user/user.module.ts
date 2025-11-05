import { Module } from '@nestjs/common';
import { databaseModule } from 'src/database/database.module';
import { usersProviders } from 'src/modules/user/provider';
import { UserController } from 'src/modules/user/user.controller';
import { UserService } from 'src/modules/user/user.service';

@Module({
  imports: [databaseModule],
  controllers: [UserController],
  providers: [...usersProviders, UserService],
})
export class UserModule {}
