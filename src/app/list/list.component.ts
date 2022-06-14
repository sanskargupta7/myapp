import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() prodList:any;
  newProduct:any;

  //prodList:String[]=['Lakme', 'Dazler', 'Lotus', 'Garnier', 'Loreal']

  // show(){
  //   window.alert("Users are added")
  // } 

  add(){
    //this.prodList.push(this.newProduct);

    //to insert it in the first place
    this.prodList.unshift(this.newProduct);
    localStorage.setItem('items', JSON.stringify(this.prodList));
    this.newProduct='';

  }
  
}

