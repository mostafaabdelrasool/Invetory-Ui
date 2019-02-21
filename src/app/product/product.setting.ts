import { TableSetting, FieldType } from "../shared/table/model";

export class ProductSetting {
    public static TableSetting: TableSetting = {
        headerSetting: [
            { headerName: 'Product Name', model: 'productName' },
            { headerName: 'Unit Price', model: 'unitPrice' },
            { headerName: 'Quantity Per Unit', model: 'quantityPerUnit' },
            { headerName: 'Units In Stock', model: 'unitsInStock' },
            { headerName: 'Discontinued', model: 'discontinued' },
            { headerName: 'Image', model: 'img', type: FieldType.Image },
            { headerName: 'Category', model: 'category.description' }],
        popupFields: [
            { name: 'productName', type: FieldType.Txt, model: 'productName', placeholder: "Product Name" },
            { name: 'UnitPrice', type: FieldType.Number, model: 'unitPrice', placeholder: "Unit price" },
            { name: 'Quantity Per Unit', type: FieldType.Number, model: 'quantityPerUnit', placeholder: "Quantity Per Unit" },
            { name: 'UnitsInStock', type: FieldType.Number, model: 'unitsInStock', placeholder: "Units In Stock" },
            { name: 'Discontinued', type: FieldType.checkBox, model: 'discontinued', placeholder: "discontinued" },
            { name: 'Image', type: FieldType.Image, model: 'img', placeholder: "image" },
            {
                name: 'Category', type: FieldType.select,
                model: 'categoryId', placeholder: "Category",
                selectSetting: {
                    apiUrl: 'api/Category', data: [], dataModel: 'id', dataViewModel: 'categoryName',
                    cashingObjectName: 'categories'
                }
            }
        ]
    }
}