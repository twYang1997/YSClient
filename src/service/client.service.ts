import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Service } from "./service";
import { Observable } from "rxjs";
import { ClientData, ClientDetail } from "src/model/client";

@Injectable()
export class ClientService {

    constructor(
        private http: HttpClient,
        private service: Service
    ) {}

    public insertClient(clientData: ClientData): Observable<Object> {
        
        return this.http.post(
                this.service.url + '/insertClient',
                JSON.stringify(clientData),
                { 
                    responseType: 'text' 
                }
            );

    }

    public insertChecking(clientData: ClientData): boolean | string {

        if (!clientData.client.fullName) {
            return '公司名稱';
        }

        if (!clientData.client.guiNumber) {
            return '統一編號';
        }

        if (!clientData.client.type) {
            return '行業別';
        }

        if (!clientData.client.remark) {
            clientData.client.remark = '';
        }

        if (!clientData.client.ndaFlg) {
            clientData.client.ndaFlg = false;
        }

        for (let detail of clientData.clientDetails) {

            for (let key of Object.keys(detail)) {
                
                let value = detail[key as keyof ClientDetail];

                if (key != 'id' && !value) {
                    detail[key as keyof ClientDetail] = '';
                }
                

            }
        }
        
        return false;
    }

}