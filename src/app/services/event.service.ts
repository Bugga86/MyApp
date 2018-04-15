import { Eventinfo, EventStatus } from "../models/eventinfo";
import { Injectable } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class EventService {

  // private message:string = "Hello Friends";

  // private events: Eventinfo[]=[
  //   {
  //     id:"1",
  //     title:"Artifician Intelligence",
  //     location:"Mumbai",
  //     eventDate:new Date(2018,5,7),
  //     eventTime:"9:30 AM to 5:30 PM",
  //     speakers:["Rohit Parab","Manisha Parab"],
  //     status:EventStatus.OPEN,
  //     discountPercentage: 20,
  //     price: 1000
  //   },
  //   {
  //     id:"2",
  //     title:"Developing Bots with Azure Bot Service",
  //     location:"Bangalore",
  //     eventDate:new Date(2018,5,7),
  //     eventTime:"9:30 AM to 5:30 PM",
  //     speakers:["Rohit Parab","Manisha Parab"],
  //     status:EventStatus.OPEN,
  //     discountPercentage: 20,
  //     price: 2000
  //   },
  //   {
  //     id:"3",
  //     title:"MongoDB",
  //     location:"Chennai",
  //     eventDate:new Date(2018,5,7),
  //     eventTime:"9:30 AM to 5:30 PM",
  //     speakers:["Rohit Parab","Manisha Parab"],
  //     status:EventStatus.OPEN,
  //     price: 3000
  //   },
  //   {
  //     id:"4",
  //     title:"Artificial Intelligence",
  //     location:"Pune",
  //     eventDate:new Date(2018,5,7),
  //     eventTime:"9:30 AM to 5:30 PM",
  //     speakers:["Rohit Parab","Manisha Parab"],
  //     status:EventStatus.OPEN,
  //     price: 8000
  //   }
  // ];

  private readonly apiUrl ="http://localhost:8080";

  constructor(private http:HttpClient){

  }
  public getEvents():Observable<Eventinfo[]>{
    // return Observable.of(this.events);
    //below line is quivalent to 
    // let url = this.apiUrl + "/api/events"
    return this.http.get<Eventinfo[]>(`${this.apiUrl}/api/events`)
    
  }

  public  addEvent(eventInfo):Observable<any>{

    let url=`${this.apiUrl}/api/events`;
    let headerList=new HttpHeaders({'content-type':'application/json'});
    let options={
      headers:headerList
    }
    return this.http.post(url, eventInfo, options);
  }

  public getEvent(id:string):Observable<Eventinfo>{
    let url=`${this.apiUrl}/api/events/${id}`;
    return this.http.get<Eventinfo>(url);
  }

  public updateEvent(eventInfo:Eventinfo):Observable<Eventinfo>{
    let url=`${this.apiUrl}/api/events/${eventInfo.id}`;
    let headerList=new HttpHeaders({'content-type':'application/json'});
    let options={
      headers:headerList
    }
    return this.http.put<Eventinfo>(url, eventInfo, options);
  }
  
}
