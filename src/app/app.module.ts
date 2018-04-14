import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { DiscountPricePipe } from './pipes/discount-price.pipe';
import { CurrencyPipe } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventService } from './services/event.service';
import { RouterModule } from '@angular/router';
import { AppRouteModule } from './routes/app-route/app-route.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HighlightDirective,
    ReversePipe,
    DateformatPipe,
    DiscountPricePipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouteModule
  ],
  providers: [CurrencyPipe,
  EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
