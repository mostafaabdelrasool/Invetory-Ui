
export interface PopupFields {
    model: string;
    type: FieldType;
    selectUrl?: string;
    name: string;
    width?: string;
    placeholder?:string
}
export enum FieldType {
    Txt = "Text", select = "Select", checkBox = "checkBox", RadioButton = "radio", Number = "number"
}
