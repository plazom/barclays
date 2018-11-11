import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyService } from 'src/app/exchanger/api.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})

export class ExchangerComponent implements OnInit {
  currencyIds = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];
  rates = [];
  errorDateTxt = '';
  baseCurrency = "EUR";
  date;
  noDateError():boolean
  {
    return this.date && this.errorDateTxt=='';
  }
  checkDate()
  {
    this.errorDateTxt ='';
    if(!this.date)
    {
      this.errorDateTxt = 'Select date, please';
    }else{
      let minDate = new Date('1999-1-4');
      if(this.date<minDate)
      {
        this.errorDateTxt = 'There is no data for dates older then 1999-01-04';
      }
    }
  }
  
  generateRates(result=null)
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
        obj['canBeBase'] = this.currencyIds.indexOf(key)>=0;
        this.rates.push(obj);
      }
    }else
    {
      for(var i=0; i<4;i++)
      {
        let obj = {};
        obj['currency'] = null;
        obj['buy'] = null;
        obj['sell'] = null;
        obj['canBeBase'] = false;
        this.rates.push(obj);
      }
    }
  }
   
  onCurrencyNameChange(event:Event)
  {
    this.baseCurrency = (<HTMLInputElement>event.target).value;
  }

  onDateChange(event:Event)
  {
    let value = (<HTMLInputElement>event.target).value;
    if(value)
    {
      this.date = new Date(value);
    }else
    {
      this.date = null;
    }
    this.checkDate();
  }

  displayCurrencyInfo(event:Event)
  {
    this.checkDate();
    if(this.noDateError())
    {
      let dstr = this.date.getFullYear()+'-'+(this.date.getMonth()+1)+'-'+this.date.getDate();
      let str = dstr+'?base='+this.baseCurrency;
      this.currencyService.getCurrency(str).subscribe(result => {
        this.generateRates(result);
       }, error => console.error(error));
    }
  }  

  constructor(private currencyService:CurrencyService) {  
    
  }
  ngOnInit() {
    this.generateRates();
  }
}
