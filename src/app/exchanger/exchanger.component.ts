import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyService } from 'src/app/exchanger/api.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})

export class ExchangerComponent {
  currencyIds = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];
  rates = [];
  noError = true;
  baseCurrency = "EUR";
  date = '';
  checkDate():boolean
  {
    this.noError = this.date? true: false;
    return this.noError;
  }
  generateRates(result)
  {
    this.rates = [];
    if(result && result.rates)
    {
      for(let key in result.rates)
      {
        let obj = {};
        let percent5 = result.rates[key]*5/100;
        obj['currency'] = key;
        obj['buy'] = result.rates[key]-percent5;
        obj['sell'] = result.rates[key]+percent5;
        this.rates.push(obj);
      }
    }
  }
   
  onCurrencyNameChange(event:Event)
  {
    this.baseCurrency = (<HTMLInputElement>event.target).value;
    //console.log((<HTMLInputElement>event.target).value);
  }

  onDateChange(event:Event)
  {
    this.date = (<HTMLInputElement>event.target).value;
    //console.log((<HTMLInputElement>event.target).value);
    this.checkDate();
  }

  displayCurrencyInfo(event:Event)
  {
    if(this.checkDate())
    {
      //2018-11-14
      let str = this.date+'?base='+this.baseCurrency;
      this.currencyService.getCurrency(str).subscribe(result => {
        console.log(result);
        this.generateRates(result);
       }, error => console.error(error));
    }
  }  

  constructor(private currencyService:CurrencyService) {  
  }

}
