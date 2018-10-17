import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class AdminAuthGuard {

  constructor(private auth: AuthService, private userServive: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
        .map(appuser => appuser.isAdmin)
  }

}
