import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(prods:[], pSearch:any): any{

    if(!prods){
      return [];
    }
    if(!pSearch){
      return prods;
    }
   pSearch = pSearch.toLowerCase();

   return prods.filter((i:String)=>{return i.toLowerCase().includes(pSearch)})
  }

}
