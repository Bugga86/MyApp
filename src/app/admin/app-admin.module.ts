import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LogComponent } from './components/log/log.component';
import { ReportComponent } from './components/report/report.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: AdminHomeComponent},
  { path:'log', component: LogComponent},
  { path: 'report', component: ReportComponent},
  { path: '*', redirectTo: ''}
];

@NgModule({
  declarations: [
    LogComponent, 
    ReportComponent,
    AdminHomeComponent
    
  ],
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
 ]
})
export class AppAdminModule { }
