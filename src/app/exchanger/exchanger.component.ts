import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent implements OnInit {
  summaries = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];
  noError = true;
  baseCurrency = "EUR";
  date = '';
  checkDate():boolean
  {
    this.noError = this.date? true: false;
    return this.noError;
  }
  onCurrencyNameChange(event:Event)
  {
    this.baseCurrency = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  }

  onDateChange(event:Event)
  {
    this.date = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
    this.checkDate();
  }

  displayCurrencyInfo(event:Event)
  {
    if(this.checkDate())
    {
      
    }
    // [] - из компонента в шаблон
    // () - из шаблона в компонент
    //(<HTMLInputElement>event.target).value
  }  

  constructor() { }

  ngOnInit() {
  }

}
