export class Order {
    constructor (
        public orderId?: string,
        public orderDate?: string,
        public dealerId?: string,
        public salesId?: string,
        public clientId?: string,
        public exportFlg?: boolean
    ) {}
}

export class OrderDetail {
    constructor (
        public id?: {
            orderId: string;
            seq: number;
        },
        public productId?: string,
        public cmsId?: string,
        public processingDate?: string,
        public buildDateS?: string,
        public buildDateE?: string,
        public fillDateS?: string,
        public fillDateE?: string,
        public qualifiedDateS?: string,
        public qualifiedDateE?: string,
        public exportDate?: string
    ) {}
}
