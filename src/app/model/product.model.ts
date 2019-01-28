import { categories } from ".";
import { supplier } from "./supplier.model";

export interface Products {
    id: string;
    productName: string;
    supplierId?: any;
    categoryId?: any;
    quantityPerUnit: string;
    unitPrice?: number;
    unitsInStock?: number;
    unitsOnOrder?: number;
    reorderLevel?: number;
    discontinued: boolean;
    category?: categories;
    supplier?:supplier;
    orderDetails?: any[];
}