import { Component, OnInit } from '@angular/core';
import { TableSetting } from 'src/app/shared/table/model';
import { Categories } from 'src/app/model/category.model';
import { CategorySetting } from '../category.setting';
import { CategoryService } from '../service/category.service';
import { Store, select } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import * as fromCategorySelector from '../store/selector/category.selector';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent extends BaseComponent<Categories>
  implements OnInit {
  private _tableSetting: TableSetting;
  serviceApi: string;
  categories$: Observable<Array<Categories>>;
  constructor(private categoryService: CategoryService
    , public store: Store<EntityState<Categories>>) {
    super(categoryService.serviceApi, store,"category");
    this.categories$ = store.pipe(select(fromCategorySelector.getCategoryEntity));
    this._tableSetting = CategorySetting.TableSetting;
    this.serviceApi = this.categoryService.serviceApi;
  }

  ngOnInit() {
    this.load();
  }
}
