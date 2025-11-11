import { Module } from '@nestjs/common';
import { usersProviders } from 'src/modules/user/provider';
import { UserController } from 'src/modules/user/user.controller';
import { UserService } from 'src/modules/user/user.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...usersProviders, UserService],
})
export class UserModule {}
