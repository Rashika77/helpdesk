import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { MessageService } from './services/message.service';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { MyTicketsComponent } from './components/my-tickets/my-tickets.component';
import { AssignedTicketsComponent } from './components/assigned-tickets/assigned-tickets.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { GoogleAuthGuardGuard } from './google-auth-guard.guard'
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';

const appRoutes: Routes = [
  {
    // root route
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    canActivateChild: [GoogleAuthGuardGuard],
    children: [
      { path: '', redirectTo: 'newticket', pathMatch: 'full' },
      { path: 'newticket', component: NewTicketComponent, data: { "data": "New Ticket" } },
      { path: 'mytickets', component: MyTicketsComponent, data: { "data": "My Tickets" } },
      { path: 'assignedtickets', component: AssignedTicketsComponent, data: { "data": "Assigned Tickets" } }
    ]
  }

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
    AssignedTicketsComponent,
    TopBarComponent
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
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule
 ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs,
  }, CookieService, MessageService, GoogleAuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
