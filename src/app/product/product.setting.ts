import { FieldType, PopupFields } from "../shared/EditPopup/popup.fields";

export class ProductSetting {
    public static PopupFileds: Array<PopupFields> = [
        { name: 'productName', type: FieldType.Txt, model: 'productName', placeholder: "Product Name" },
        { name: 'UnitPrice', type: FieldType.Number, model: 'unitPrice', placeholder: "Unit price" },
        { name: 'quantityPerUnit', type: FieldType.Number, model: 'quantityPerUnit', placeholder: "Quantity Per Unit" },
        { name: 'UnitsInStock', type: FieldType.Number, model: 'unitsInStock', placeholder: "Units In Stock" },
        { name: 'Discontinued', type: FieldType.checkBox, model: 'discontinued', placeholder: "Discontinued" }];
    public static Header: Array<string> = ['Id', 'productName', 'UnitPrice', 'quantityPerUnit', 'UnitsInStock', 'Discontinued', 'supplier', 'category']
}