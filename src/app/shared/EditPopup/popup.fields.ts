
export interface TableSetting {
    model: string;
    type: FieldType;
    selectUrl?: string;
    name: string;
    width?: string;
    placeholder?:string,
    headerName:string
}
export enum FieldType {
    Txt = "Text",
    select = "Select",
    checkBox = "checkBox",
    RadioButton = "radio",
    Number = "number",
    Image = "img"
}
