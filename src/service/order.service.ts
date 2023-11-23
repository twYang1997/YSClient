import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "src/model/order";
import { Service } from "./service";

export class OrderService {

    constructor(
        private http: HttpClient,
        private service: Service
    ) {}

    public findAll(): Observable<Order[]> {
        return this.http.get<Order[]>(this.service.url + '/orders')
    }
}