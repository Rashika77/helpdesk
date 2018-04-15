import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';
import { CookieService } from 'ngx-cookie-service';
import {MessageService} from './services/message.service';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { AssignedTicketsComponent } from './components/assigned-tickets/assigned-tickets.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
  children: [
    {path: '', redirectTo: 'newticket',pathMatch: 'full'},  
    {path: 'newticket', component: NewTicketComponent, data:{"title":"New Ticket"}},
    {path: 'mytickets', component: MyTicketsComponent, data:{"title":"My Tickets"}},
    {path: 'assignedtickets', component: AssignedTicketsComponent, data:{"title":"Assigned Tickets"}}
  ] }

];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("651385506701-lvge4jomk060jgqdqdt35mo6j6nvqbf7.apps.googleusercontent.com")
      },
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    LoginComponent,
    HomeComponent,
    NewTicketComponent,
    MyTicketsComponent,
    AssignedTicketsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    SocialLoginModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs,
  },CookieService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
