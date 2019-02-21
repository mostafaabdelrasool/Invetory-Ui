
export interface TableSetting {
    headerSetting:Array<HeaderSetting>
    popupFields:Array<PopupFields>
}
export interface PopupFields{
    type: FieldType;
    placeholder?:string,
    model: string;
    displayValue?:Array<string>;
    selectSetting?:SelectSetting;
    name?: string;
}
export interface HeaderSetting{
    model: string;
    width?: string;
    headerName:string;
    type?:FieldType
}
export enum FieldType {
    Txt = "Text",
    select = "select",
    checkBox = "checkBox",
    RadioButton = "radio",
    Number = "number",
    Image = "img"
}
export interface SelectSetting{
    apiUrl?:string ;
    data?:Array<any>;
    dataModel?:string;
    dataViewModel?:string;
    cashingObjectName?:string;
}
