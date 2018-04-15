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
import { HttpClientModule} from '@angular/common/http';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { EventDataResolver } from './resolvers/event-data-resolver.service';
import { AuthGuard } from './guards/auth-guard.services';


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
    RegisterComponent,
    AddEventComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouteModule,
    HttpClientModule
  ],
  providers: [CurrencyPipe,
  EventService,
  EventDataResolver,
  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
