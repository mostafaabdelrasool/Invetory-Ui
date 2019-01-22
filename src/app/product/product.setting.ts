import { FieldType, PopupFields } from "../shared/EditPopup/popup.fields";

export class ProductSetting {
    public static PopupFileds: Array<PopupFields> = [
        {headerName:'productName', name: 'productName', type: FieldType.Txt, model: 'productName', placeholder: "Product Name" },
        {headerName:'UnitPrice', name: 'UnitPrice', type: FieldType.Number, model: 'unitPrice', placeholder: "Unit price" },
        {headerName:'quantityPerUnit', name: 'quantityPerUnit', type: FieldType.Number, model: 'quantityPerUnit', placeholder: "Quantity Per Unit" },
        {headerName:'UnitsInStock', name: 'UnitsInStock', type: FieldType.Number, model: 'unitsInStock', placeholder: "Units In Stock" },
        {headerName:'Discontinued', name: 'Discontinued', type: FieldType.checkBox, model: 'discontinued', placeholder: "Discontinued" }];
}