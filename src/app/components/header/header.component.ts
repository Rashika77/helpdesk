import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData = null;
  cookieValue = null;
  constructor( private cookieService: CookieService) { }

  ngOnInit() {
    this.userData =  JSON.parse(this.cookieService.get('userData'));
    // this.userData = JSON.parse(localStorage.getItem("userData"));
    var user_name = this.userData.name;
    var pic_url = this.userData.image;
    var email = this.userData.email;
  }

  socialSignOut(){
    this.cookieService.delete('userData');
  }

}
