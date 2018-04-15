import { Component, OnInit } from '@angular/core';
import { Eventinfo, EventStatus } from '../../models/eventinfo';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   filteredPrice:number= 1000;

  colors:string[]=['red','green','blue'];

   selectedColor:string=undefined;

   events:Eventinfo[];
  

  filteredPriceHandler(Price){
    this.filteredPrice = Price.value;
  }

  applyColor(color){
    this.selectedColor=color.value;
  }
  constructor(private es: EventService) { 
    es.getEvents()
      .subscribe(
        (res) => this.events = res,
        (err)=> console.log(err)
      )
  }

  ngOnInit() {
    
  }



}
