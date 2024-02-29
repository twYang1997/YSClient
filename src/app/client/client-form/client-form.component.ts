import { Component, OnInit} from "@angular/core";
import { Client, ClientDetail, ClientData } from "src/model/client";
import { Country, TaiwanCity, Type } from "src/model/jsonFile";
import { ClientService } from "src/service/client.service";
import { Service } from "src/service/service";
import { SwalService } from "src/service/swal.service";

@Component({
    selector: 'app-client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
    
    countries: Country[];

    taiwanCities: TaiwanCity[];
    
    businessTypes: Type[];

    constructor(
        public service: Service,
        public swalService: SwalService,
        public clientService: ClientService
    ) {
        this.service.getJsonData('countries').subscribe(
            (result: Country[]) => {
                this.countries = result;
            }
        );
        this.service.getJsonData('taiwanCity').subscribe(
            (result: TaiwanCity[]) => {
                this.taiwanCities = result;
            }
        );
        this.service.getJsonData('businessType').subscribe(
            (result: Type[]) => {
                this.businessTypes = result;
            }
        )
    }

    client: Client;
    clientDetails: ClientDetail[];
    cityRefDetails: (any | TaiwanCity) [] = [];

    ngOnInit(): void {

        this.client = new Client();
        this.clientDetails = [
            new ClientDetail()
        ];
    }

    addClientDetail(): void {

        this.clientDetails.push(new ClientDetail());
    }

    removeClientDetail(seq: number): void {

        this.clientDetails.splice(seq, 1);
        this.cityRefDetails.splice(seq, 1);

    }

    setCityRef(city: string | undefined, seq: number) {
        
        this.clientDetails[seq].town = undefined;
        this.cityRefDetails[seq] = this.taiwanCities.filter(
            data => data.CityName == city
        )[0];

    }

    submit(): void {
        
        let clientData: ClientData = {
            client: this.client,
            clientDetails: this.clientDetails
        };

        let checkResult = this.clientService.insertChecking(clientData);

        if (!checkResult) {

            this.swalService.loadingSwal();
            this.clientService.insertClient(clientData).subscribe({
                next: (result) => {
                    switch (result) {
                        case 'dup':
                            this.swalService.infoSwal('重複的統一編號');
                            break;
                        case 'error':
                            this.swalService.failedSwal();
                            break;
                        case 'success':
                            this.swalService.successSwal();
                            break;
                    }
                },
                error: () => {
                    this.swalService.failedSwal();
                }
            });

        } else {

            this.swalService.infoSwal('請輸入' + checkResult);
        }

    }

    
}