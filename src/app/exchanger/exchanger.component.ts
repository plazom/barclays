import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent implements OnInit {
  summaries = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY'];
  onCurrencyNameChange(event:Event)
  {
    console.log((<HTMLInputElement>event.target).value);
  }

  onDateChange(event:Event)
  {
    console.log((<HTMLInputElement>event.target).value);
  }

  displayCurrencyInfo(event:Event)
  {
    // [] - из компонента в шаблон
    // () - из шаблона в компонент
    //(<HTMLInputElement>event.target).value
  }  

  constructor() { }

  ngOnInit() {
  }

}
