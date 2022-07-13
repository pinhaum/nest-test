import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return { products: this.productsService.fetchProducts() };
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.fetchSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsService.updateProduct(
      prodId,
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return null;
  }
}
