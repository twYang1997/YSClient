import { HttpClient } from "@angular/common/http";
import { Injectable, SimpleChanges, ViewChild } from "@angular/core";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";
import { Observable } from "rxjs";

@Injectable()
export class Service {

    public url: string;
    
    constructor(
        private http: HttpClient
    ) {
        this.url = 'http://localhost:8080';
    }

    public stringToDate(date_String: string): Date {
        return new Date(date_String);
    }

    public dateToString(date: Date) {
        return date.getFullYear() + (date.getMonth() + 1).toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0');
    }

    public getJsonData(fileName: string): Observable<any> {
        return this.http.get('./assets/dat/' + fileName + '.json');
    }

}