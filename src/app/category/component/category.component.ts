import { Component, OnInit } from '@angular/core';
import { TableSetting } from 'src/app/shared/table/model';
import { Categories } from 'src/app/model/category.model';
import { CategorySetting } from '../category.setting';
import { CategoryService } from '../service/category.service';
import { Store, select } from '@ngrx/store';
import { SaveCategory, LoadCategory } from '../store/actions/category.action';
import { EntityState } from '@ngrx/entity';
import * as fromCategorySelector from '../store/selector/category.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  private _tableSetting: TableSetting;
  serviceApi: string;
  categories$: Observable<Array<Categories>>;
  constructor(private categoryService: CategoryService
    , private store: Store<EntityState<Categories>>) {
    this.categories$ = store.pipe(select(fromCategorySelector.getCategoryEntity));
    this._tableSetting = CategorySetting.TableSetting;
    this.serviceApi=this.categoryService.serviceApi;
  }

  ngOnInit() {
    this.loadCategories();
  }
  saveCategory = (category: Categories) => {
    let p = new SaveCategory(category);
    this.store.dispatch(p);
  }
  updateCategory=(category: Categories) => {
    // let p = new SaveProduct(product);
    // this.store.dispatch(p);
  }
  loadCategories = () => {
    let p = new LoadCategory();
    this.store.dispatch(p);
  }

}
