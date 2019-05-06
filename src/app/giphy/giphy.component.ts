import { Component, OnInit } from '@angular/core';
import { FetchGiphyDataService } from '../fetch-giphy-data.service';



@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  search:string="";
  apiKey:string = "fyM32Vk53GV1gkk2qb7OQ025cmR0s6nW";
  url:string= "https://api.giphy.com/v1/gifs/search?api_key=fyM32Vk53GV1gkk2qb7OQ025cmR0s6nW&q=";
  secondUrl:string="&limit=25&offset=0&rating=G&lang=en";
  data:any={
    data:[]
  };
  
  constructor(private giphyService: FetchGiphyDataService) { }

  ngOnInit() {
  }

  callApi(){
    console.log("Inside the call",this.search);
    if(this.search ==""){
      alert("Please enter some search text");
      return false;
    }
    var url=this.url+this.search+this.secondUrl;
    console.log(url);

    this.giphyService.fetchGiphyData(url).subscribe((data)=>{
      this.data = data.data.slice(0,5);
      console.log(this.data);
    })
   
  }
}
