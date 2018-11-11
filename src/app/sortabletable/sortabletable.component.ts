import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sortabletable',
  templateUrl: './sortabletable.component.html',
  styleUrls: ['./sortabletable.component.css']
})
export class SortabletableComponent implements OnInit {
  @Input() rates = [];
  constructor() { }

  ngOnInit() {
  }

}
