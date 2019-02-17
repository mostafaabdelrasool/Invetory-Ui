import { TableSetting, FieldType } from "../shared/table/model";

export class CategorySetting {
    public static TableSetting: TableSetting ={ headerSetting:[
        {
            headerName: 'Name', model: 'CategoryName',
        },
        {
            headerName: 'Description', 
            model: 'Description'
        }, {
            headerName: 'Image',  model: 'Picture'
        }],
        popupFields:[
            {
                name: 'CategoryName', type: FieldType.Txt, model: 'CategoryName',
                placeholder: "Name"
            },
            {
               name: 'Description', type: FieldType.Txt,
                model: 'Description', placeholder: "Description"
            }, {
               name: 'img', type: FieldType.Image,
                model: 'Picture', placeholder: "image"
            }
        ]
    };
}