import { Component, OnInit } from '@angular/core';
import { Eventinfo, EventStatus } from '../../models/eventinfo';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private filteredPrice:number= 1000;

  private colors:string[]=['red','green','blue'];

  private selectedColor:string=undefined;
  events: Eventinfo[]=[
    {
      id:"1",
      title:"Artifician Intelligence",
      location:"Mumbai",
      eventDate:new Date(2018,5,7),
      eventTime:"9:30 AM to 5:30 PM",
      speakers:["Rohit Parab","Manisha Parab"],
      status:EventStatus.OPEN,
      discountPercentage: 20,
      price: 1000
    },
    {
      id:"2",
      title:"Developing Bots with Azure Bot Service",
      location:"Bangalore",
      eventDate:new Date(2018,5,7),
      eventTime:"9:30 AM to 5:30 PM",
      speakers:["Rohit Parab","Manisha Parab"],
      status:EventStatus.OPEN,
      discountPercentage: 20,
      price: 2000
    },
    {
      id:"3",
      title:"MongoDB",
      location:"Chennai",
      eventDate:new Date(2018,5,7),
      eventTime:"9:30 AM to 5:30 PM",
      speakers:["Rohit Parab","Manisha Parab"],
      status:EventStatus.OPEN,
      price: 3000
    },
    {
      id:"4",
      title:"Artificial Intelligence",
      location:"Pune",
      eventDate:new Date(2018,5,7),
      eventTime:"9:30 AM to 5:30 PM",
      speakers:["Rohit Parab","Manisha Parab"],
      status:EventStatus.OPEN,
      price: 8000
    }
  ]

  filteredPriceHandler(Price){
    this.filteredPrice = Price.value;
  }

  applyColor(color){
    this.selectedColor=color.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
