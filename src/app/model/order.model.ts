

export interface Order {
    orderID: string,
    customerID: string,
    employeeID: string,
    orderDate: string,
    requiredDate: string,
    shippedDate: string,
    shipVia: string,
    freight: string,
    shipName: string,
    shipAddress: {
        street: string,
        city: string,
        region: string,
        postalCode: string,
        country: string
    },
    details: [
        {
            productID: string,
            unitPrice: string,
            quantity: string,
            discount: string
        }
    ]
}