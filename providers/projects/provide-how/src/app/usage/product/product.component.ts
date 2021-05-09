import { Component, DoCheck, Inject } from '@angular/core';
import { Category, Product } from '../model/data.model';
import { CATEGORY_REPO, PRODUCT_REPO, Repository } from '../model/repository';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements DoCheck {

  categories: Category[] = []
  list: Product[] = []

  constructor(
    @Inject(CATEGORY_REPO)
    private catRepo: Repository<Category>,
    @Inject(PRODUCT_REPO)
    private proRepo: Repository<Product>
  ) {
    this.list = proRepo.getAll()
  }

  addNew(select: any, input: any) {

    const category = this.categories.find(a => a.id == select.value)

    if (category) {
      this.proRepo.addNew({
        id: 0,
        category: category,
        name: input.value
      })

      input.value = ''

      this.list = this.proRepo.getAll()
    }

  }

  ngDoCheck() {
    this.categories = this.catRepo.getAll()
  }
}
