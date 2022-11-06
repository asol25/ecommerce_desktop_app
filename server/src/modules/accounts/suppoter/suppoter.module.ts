import { Module } from '@nestjs/common';
import { SuppoterController } from './suppoter.controller';
import { SuppoterService } from './suppoter.service';

@Module({
  controllers: [SuppoterController],
  providers: [SuppoterService]
})
export class SuppoterModule {}
