import { FieldType, TableSetting } from "../shared/model/popup.fields";

export class ProductSetting {
    public static TableSetting: Array<TableSetting> = [
        { headerName: 'Product Name', name: 'productName', type: FieldType.Txt, model: 'productName', placeholder: "Product Name" },
        { headerName: 'Unit Price', name: 'UnitPrice', type: FieldType.Number, model: 'unitPrice', placeholder: "Unit price" },
        { headerName: 'Quantity Per Unit', name: 'quantityPerUnit', type: FieldType.Number, model: 'quantityPerUnit', placeholder: "Quantity Per Unit" },
        { headerName: 'Units In Stock', name: 'UnitsInStock', type: FieldType.Number, model: 'unitsInStock', placeholder: "Units In Stock" },
        {
            headerName: 'Discontinued', name: 'Discontinued', type: FieldType.checkBox,
            model: 'discontinued', placeholder: "Discontinued"
        }, {
            headerName: 'Image', name: 'img', type: FieldType.Image,
            model: 'img', placeholder: "image"
        }];
}