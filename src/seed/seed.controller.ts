import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get(':many')
  execSeed(@Param('many', ParseIntPipe) many: string) {
    return this.seedService.execSeed(many);
  }

  @Get()
  clearSeed() {
    return this.seedService.clearSeed();
  }
}
