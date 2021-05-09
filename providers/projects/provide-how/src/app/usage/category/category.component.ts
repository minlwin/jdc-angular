import { Component, Inject } from '@angular/core';
import { Category } from '../model/data.model';
import { CATEGORY_REPO, Repository } from '../model/repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent {

  list: Category[] = []

  constructor(@Inject(CATEGORY_REPO) private repo: Repository<Category>) {
    this.list = repo.getAll()
  }

  addNew(input: any) {
    this.repo.addNew({
      id: 0,
      name: input.value
    })

    input.value = ''
    this.list = this.repo.getAll()
  }

}
