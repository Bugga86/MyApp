import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,OnChanges, OnDestroy {
  private appName:string="My Sample App";
  private colorName:string="red";


  constructor() { 
    console.log("Contrcutor Executed");
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
