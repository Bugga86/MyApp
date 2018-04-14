import { Eventinfo, EventStatus } from "../models/eventinfo";
import { Injectable } from "@angular/core";
import { CurrencyPipe } from "@angular/common";

@Injectable()
export class EventService {

  private message:string = "Hello Friends";

  private events: Eventinfo[]=[
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
  ];
  public getEvents():Eventinfo[]{
    return this.events;
  }

}
