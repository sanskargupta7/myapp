import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myapp';
  //prodList:String[]=['Lakme', 'Dazler', 'Lotus', 'Garnier', 'Loreal']
  prodList: String[] = [];

  ngOnInit(): void {
    if(localStorage.getItem('items')){
      this.prodList = JSON.parse(localStorage.getItem('items')!)
    }
    
  }
}
