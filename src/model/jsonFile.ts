export class Country {
    constructor(
        public countryCode: string,
        public countryNameTw: string,
        public countryNameCn: string,
        public countryNameEn: string,
        public phoneCode: string
    ) {}
}
export class TaiwanCity {
    constructor(
        public CityName: string,
        public CityEngName: string,
        public AreaList: {
            ZipCode: string;
            AreaName: string;
            AreaEngName: string;
        } []
    ) {}
}