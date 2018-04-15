import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute, private socialAuthService: AuthService,private cookieService: CookieService  ) { }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.router.navigate(['/home'], {relativeTo:this.route});
        // localStorage.setItem('userData',JSON.stringify(userData));
        this.cookieService.set( 'userData', JSON.stringify(userData) );
      }
    );
  }

  onSignIn(googleUser) {
    debugger;
    this.router.navigate(['/home'], {relativeTo:this.route});
    var profile = googleUser.getBasicProfile();
    var imagurl = profile.getImageUrl();
    var name = profile.getName();
    var email = profile.getEmail();
    var id = profile.getId(); 
    var id_token = googleUser.getAuthResponse().id_token;
    sessionStorage.setItem('aeh_usertoken',JSON.stringify(id_token));

  }

}
