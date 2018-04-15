import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from '../../components/home/home.component';
import { AboutComponent } from '../../components/about/about.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { AddEventComponent } from '../../components/add-event/add-event.component';
import { EditEventComponent } from '../../components/edit-event/edit-event.component';
import { EventDataResolver } from '../../resolvers/event-data-resolver.service';
import { AuthGuard } from '../../guards/auth-guard.services';

let routes:Routes=[
  { path: '', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '*', redirectTo: ''},
  { 
    path: 'addEvent', 
    component: AddEventComponent,
    canActivate: [AuthGuard]
  },
  { path: 'editevent/:id', 
    component:EditEventComponent,
    resolve: { 
      eventData:EventDataResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRouteModule { }
