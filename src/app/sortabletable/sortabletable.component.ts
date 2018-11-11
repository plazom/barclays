import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sortabletable',
  templateUrl: './sortabletable.component.html',
  styleUrls: ['./sortabletable.component.css']
})
export class SortabletableComponent implements OnInit {
  @Input() rates = [];
  sortColName = '';
  sortDown = true;

  constructor() { }
  getColor(rate):string{
      return rate && rate.canBeBase?'red':'black';
  }
  onColClick(colName)
  {
    if(this.sortColName==colName)
    {
      this.sortDown = !this.sortDown;
    }else
    {
      this.sortColName=colName;
      this.sortDown = true;
    }
  }  
  hideArrow(colName, down):boolean
  {
    return !(this.sortColName==colName && this.sortDown==down);
  }
  ngOnInit() {
  }

}
