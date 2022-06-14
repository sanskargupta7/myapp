import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.css']
})
export class SecComponent implements OnInit {
  @Input('prods') prods:any;

  pSearch:String='';


  constructor() { }

  ngOnInit(): void {
  }

  discard(index:number){
    this.prods.splice(index, 1)
    localStorage.setItem('item', JSON.stringify(this.prods))

  }

}
