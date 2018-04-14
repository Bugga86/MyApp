import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy, Input } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,OnChanges, OnDestroy {
  private appName:string="My Sample App";
  private colorName:string="red";


  constructor(private es: EventService) { 
    console.log("Contrcutor Executed");
    console.log(es.getEvents());
  }

  ngOnInit(): void {
    console.log("OnInit Executed");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges Executed",changes.data.currentValue);
  }
  ngOnDestroy(): void {
    console.log("OnDestroy Executed");
  }
}
