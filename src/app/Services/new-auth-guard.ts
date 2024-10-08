import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

export const NewAuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuard).canActivate(route, state);
};

class AuthGuard {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.auth.isAuthentcated()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
