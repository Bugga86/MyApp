import { Component, OnInit } from '@angular/core';
import { Eventinfo, EventStatus } from '../../models/eventinfo';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private filteredPrice:number= 1000;

  private colors:string[]=['red','green','blue'];

  private selectedColor:string=undefined;

  private events:Eventinfo[];
  

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
