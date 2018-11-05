import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Products } from '../model/index';
import { PopupFields, FieldType } from '../shared/EditPopup/popup.fields';

@Component({
  selector: 'st-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Products>;
  header: Array<string>;
  private _popupFileds: Array<PopupFields>;
  constructor(private productservice: ProductService) {
    this.products = new Array<Products>();
    this.header = ['Id', 'productName', 'UnitPrice', 'quantityPerUnit', 'UnitsInStock', 'Discontinued', 'supplier', 'category'];
    this._popupFileds = [];
  }

  ngOnInit() {
    this.productservice.dataService.get().subscribe(x => {
      this.products.push.apply(x);
    })
    this._popupFileds.push({ name: 'productName', type: FieldType.Txt, model: 'productName', placeholder: "Product Name" },
      { name: 'UnitPrice', type: FieldType.Number, model: 'unitPrice', placeholder: "Unit price" },
      { name: 'quantityPerUnit', type: FieldType.Number, model: 'quantityPerUnit', placeholder: "Quantity Per Unit" },
      { name: 'UnitsInStock', type: FieldType.Number, model: 'unitsInStock', placeholder: "Units In Stock" },
      { name: 'Discontinued', type: FieldType.checkBox, model: 'discontinued', placeholder: "Discontinued" },
    )
  }
  saveProduct(product) {
    this.productservice.dataService.post(product).subscribe(x => {
    })
  }

}
