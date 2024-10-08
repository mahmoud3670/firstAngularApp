import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Server } from '../servers/server.model';
import { Observable } from 'rxjs';
import { ServersService } from '../servers/servers.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerResolverService implements Resolve<Server> {
  constructor(private serverService: ServersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer(+route.params['id']);
  }
}
