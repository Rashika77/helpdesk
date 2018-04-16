import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivateChild, Router, ActivatedRoute } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class GoogleAuthGuardGuard implements CanActivateChild {
  userData = null;
  constructor(private router: Router, private route:ActivatedRoute,  private cookieService: CookieService) {
  }
  canActivateChild() {
    this.userData =  this.cookieService.get('userData');
    if(!this.userData){
      console.log('redirecting home due to access Rights..');    
      this.router.navigate(['/login'], {relativeTo:this.route});
      return false;
    }
    return true;
  }
}
