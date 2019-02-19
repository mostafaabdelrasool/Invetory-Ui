import { TableSetting, FieldType } from "../shared/table/model";

export class CategorySetting {
    public static TableSetting: TableSetting ={ headerSetting:[
        {
            headerName: 'Name', model: 'categoryName',
        },
        {
            headerName: 'Description', 
            model: 'description'
        }, {
            headerName: 'Image',  model: 'picture'
        }],
        popupFields:[
            {
                name: 'CategoryName', type: FieldType.Txt, model: 'categoryName',
                placeholder: "Name"
            },
            {
               name: 'Description', type: FieldType.Txt,
                model: 'description', placeholder: "Description"
            }, {
               name: 'img', type: FieldType.Image,
                model: 'picture', placeholder: "image"
            }
        ]
    };
}