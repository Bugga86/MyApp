import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AddEventComponent } from "../components/add-event/add-event.component";
import { Observable } from "rxjs/Observable";


@Injectable()
export class ConfirmLeaveGuard implements CanDeactivate<AddEventComponent> {
    canDeactivate(component: AddEventComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let res=confirm("Are you sure to leave?");
        return res;
    }
}