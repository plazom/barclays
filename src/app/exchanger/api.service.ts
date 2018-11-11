import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyService{
	constructor(private httpClient:HttpClient){}
	getCurrency(datastr)
	{
		let baseUrl = 'https://api.exchangeratesapi.io/';
    return this.httpClient.get<any[]>(baseUrl + datastr);
	}
}