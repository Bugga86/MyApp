import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Eventinfo } from '../models/eventinfo';
import { Observable } from 'rxjs/Observable';
import { EventService } from '../services/event.service';

@Injectable()
export class EventDataResolver implements Resolve<Eventinfo> {
  constructor(private es:EventService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Eventinfo | Observable<Eventinfo> | Promise<Eventinfo> {
    
    let sid= route.paramMap.get("id");
    return this.es.getEvent(sid);
  }
}
