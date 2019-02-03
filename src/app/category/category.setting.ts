import { TableSetting, FieldType } from "../shared/table/model";

export class CategorySetting {
    public static TableSetting: Array<TableSetting> = [
        {
            headerName: 'Name', name: 'CategoryName', type: FieldType.Txt, model: 'CategoryName',
            placeholder: "Name"
        },
        {
            headerName: 'Description', name: 'Description', type: FieldType.Txt,
            model: 'Description', placeholder: "Description"
        }, {
            headerName: 'Image', name: 'img', type: FieldType.Image,
            model: 'Picture', placeholder: "image"
        }];
}