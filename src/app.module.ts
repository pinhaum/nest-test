import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ProductsModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
