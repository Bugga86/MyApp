import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventStatus } from '../../models/eventinfo';

@Component({
  selector: 'edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})



export class EditEventComponent implements OnInit {

  private form:FormGroup;
  id:string;

  constructor(private fb:FormBuilder, private es:EventService, private router:Router,
              private route:ActivatedRoute) { 
               this.id = this.route.snapshot.paramMap.get("id");
               console.log("Received ID is"+  this.id);
              }

  ngOnInit() {
    let data=this.route.snapshot.data["eventData"];
          this.form=this.fb.group({
            id:[data.id,{
              validators:Validators.required,
              updateOn: 'submit'
            }],
              title:[data.title,{
                validators:Validators.compose([Validators.required,Validators.minLength(6)])
              }],
              location:[data.location,{
                validators:Validators.required,
                updateOn: 'submit'
              }],
              eventTime:[data.eventTime,{
                validators:Validators.required,
                updateOn: 'submit'
              }],
              price:[data.price,{
                validators:Validators.required,
                updateOn: 'submit'
              }],
              discountPrice:[data.discountPercentage,{
                validators:Validators.required,
                updateOn: 'submit'
              }],
              speakers:[data.speakers,{
                validators:Validators.required,
                updateOn: 'submit'
              }],
              eventDate:[data.eventDate,{
                validators:Validators.required,
                updateOn: 'submit'
              }],
      
          });
    
   
  }

  updateEvent(){
      this.es.updateEvent(this.form.value)
        .subscribe(
          (res) => {
            alert('Successfully Updated');
            this.router.navigate(['/']);
          },
          (err) => alert("Failed to load")
        )
    } 

}
