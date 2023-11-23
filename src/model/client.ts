export class YSUser {
    constructor(
        public id?: string,
        public name?: string,
        public email?: string
        ) {}
}

export class Client {
    constructor(
        public clientId?: string,
        public guiNumber?: string,
        public fullName?: string,
        public type?: string,
        public ndaFlg?: boolean,
        public remark?: string,
        public status?: string
        ) {}
}

export class ClientDetail {
    constructor(
        public id?: {
            clientId?: string;
            seq?: number
        },
        public branchName?: string,
        public country?: string,
        public city?: string,
        public town?: string,
        public address?: string,
        public dealer1?: string,
        public dealerPhone1?: string,
        public dealerEmail1?: string,
        public dealer2?: string,
        public dealerPhone2?: string,
        public dealerEmail2?: string,
        public status?: string
    ) {}
}

export class ClientData {
    constructor(
        public client: Client,
        public clientDetails: ClientDetail[]
    ) {}
}