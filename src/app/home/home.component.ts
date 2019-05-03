import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  showTime:boolean = true;
  time:string = "";
  date:string="";
  sub:Subscription;
  ngOnInit() {
    //this.sub = Observable.timer(1000);
    this.updateCurrentTime();
  }

  toggleTime(){
    console.log("Inside the toggle time");
    this.showTime = !this.showTime;
  }
  updateCurrentTime(){
      var date = new Date();
      var hh = date.getHours();
      var mm = date.getMinutes();
      var ss = date.getSeconds();
      this.time =  (hh>12?((hh-12 <10) ? ("0"+(hh-12)) : hh):
        (hh<10?"0"+hh:hh))+":"+(mm<10?"0"+mm:mm)+":"+(ss<10?"0"+ss:ss)+" "+(hh>12?"PM":"AM");  
      this.date = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
  }
ngOnDestroy(){
  console.log("Destroy timer");

}
  

}
