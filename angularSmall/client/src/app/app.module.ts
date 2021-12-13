import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages'

import { ChechFormService } from './chech-form.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

const appRoute: Routes = [
  { path: "", component: HomeComponent },
  { path: "account", component: AccountComponent },
  // { path: "/", component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccountComponent,
    LoginComponent,
    RegComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    // MatSliderModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule

  ],
  providers: [
    ChechFormService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
