import { Action } from '@ngrx/store';
import { Categories } from 'src/app/model/category.model';

export enum CategoryActionTypes {
  LoadCategories = 'Load Categories',
  LoadCategorisSuccess = 'Load Categoriss success',
  LoadCategorisFail = 'Load Categoriss fail',
  SaveCategory = 'Save Categories',
  SaveCategorySuccess = 'Save Categories success',
  SaveCategoryFail = "Save Categories Fail",
  UpdateCategory = "Update Categories",
  UpdateCategorySuccess = "UpdateCategoriesSuccess"
}

export class LoadCategory implements Action {
  readonly type = CategoryActionTypes.LoadCategories;
  public payload: Categories[];
  constructor() { }
}
export class LoadCategorisSuccess implements Action {
  readonly type = CategoryActionTypes.LoadCategorisSuccess;

  constructor(public payload: Categories[]) { }
}
export class LoadCategorisFail implements Action {
  readonly type = CategoryActionTypes.LoadCategorisFail;

  constructor(public payload: Categories[]) { }
}
export class SaveCategory implements Action {
  readonly type = CategoryActionTypes.SaveCategory;

  constructor(public payload: Categories) { }
}
export class SaveCategorySuccess implements Action {
  readonly type = CategoryActionTypes.SaveCategorySuccess;

  constructor(public payload: Categories) { }
}
export class UpdateCategory implements Action {
  readonly type = CategoryActionTypes.UpdateCategory;

  constructor(public payload: Categories) { }
}
export class UpdateCategorySuccess implements Action {
  readonly type = CategoryActionTypes.UpdateCategorySuccess;

  constructor(public payload: Categories) { }
}
export class SaveCategoryFail implements Action {
  readonly type = CategoryActionTypes.SaveCategoryFail;

  constructor(public payload: Categories) { }
}
export type CategoryActionUnion = LoadCategory | SaveCategory 
| SaveCategorySuccess|SaveCategoryFail | LoadCategorisFail | LoadCategorisSuccess;