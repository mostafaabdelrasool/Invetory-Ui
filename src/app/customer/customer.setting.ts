import { TableSetting, FieldType } from "../shared/table/model";

export class CustomerSetting {
    public static TableSetting: TableSetting = {
        headerSetting: [
            { headerName: 'Company Name', model: 'CompanyName' },
            { headerName: 'Contact Name', model: 'ContactName' },
            { headerName: 'Contact Title', model: 'ContactTitle' },
            { headerName: 'Address', model: 'Address' },
            { headerName: 'City', model: 'City' },
            { headerName: 'Region', model: 'Region'},
            { headerName: 'Country', model: 'Country' },
            { headerName: 'Phone', model: 'Phone' }],
        popupFields: [
            { name: 'CompanyName', type: FieldType.Txt, model: 'CompanyName', placeholder: "Company Name" },
            { name: 'ContactName', type: FieldType.Txt, model: 'ContactName', placeholder: "Contact Name" },
            { name: 'ContactTitle', type: FieldType.Txt, model: 'ContactTitle', placeholder: "Contact Title" },
            { name: 'Address', type: FieldType.Txt, model: 'Address', placeholder: "Address" },
            { name: 'City', type: FieldType.Txt, model: 'City', placeholder: "City" },
            { name: 'Region', type: FieldType.Txt, model: 'Region', placeholder: "Region" },
            { name: 'Phone', type: FieldType.Txt, model: 'Phone', placeholder: "Phone" },
         
        ]
    }
}