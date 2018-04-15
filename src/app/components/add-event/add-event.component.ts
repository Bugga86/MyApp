import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Eventinfo, EventStatus } from '../../models/eventinfo';
import { Router } from '@angular/router';

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  private form:FormGroup;

  constructor(private fb:FormBuilder, private es:EventService, private router:Router) { }

  ngOnInit() {
    this.form=this.fb.group({
      id:["",{
        validators:Validators.required,
        updateOn: 'submit'
      }],
        title:["",{
          validators:Validators.compose([Validators.required,Validators.minLength(6)])
        }],
        location:["",{
          validators:Validators.required,
          updateOn: 'submit'
        }],
        eventTime:["",{
          validators:Validators.required,
          updateOn: 'submit'
        }],
        price:["",{
          validators:Validators.required,
          updateOn: 'submit'
        }],
        discountPrice:["",{
          validators:Validators.required,
          updateOn: 'submit'
        }],
        speakers:["",{
          validators:Validators.required,
          updateOn: 'submit'
        }],
        eventDate:["",{
          validators:Validators.required,
          updateOn: 'submit'
        }],

    });
  }

  saveEvent(){
    if(this.form.valid){
      let eventInfo=this.form.value;
      eventInfo.status=EventStatus.OPEN;
      this.es.addEvent(eventInfo)
        .subscribe(
          (res) => {
            alert('Successfully Added');
            this.router.navigate(['/'])},
          (err) => alert("Failed to load")
        )
    } else {
      alert("invalid");
    }
    
  }

}
