
export interface TableSetting {
    model: string;
    type: FieldType;
    selectUrl?: string;
    name: string;
    width?: string;
    placeholder?:string,
    headerName:string,
    displayValue?:string,
    selectSetting?:SelectSetting
}
export enum FieldType {
    Txt = "Text",
    select = "select",
    checkBox = "checkBox",
    RadioButton = "radio",
    Number = "number",
    Image = "img"
}
export class SelectSetting{
    apiUrl?:string ;
    data?:Array<any>;
    dataModel?:string;
    dataViewModel?:string;
    cashingObjectName?:string;
}
