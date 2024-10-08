import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { canComponentDeactivate } from '../../Services/can-deactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.scss',
})
export class EditServerComponent implements OnInit, canComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  changesSaved: boolean = false;
  allowEdit = false;

  constructor(
    private serverServes: ServersService,
    private activated: ActivatedRoute,
    private router: Router
  ) {}
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.allowEdit) {
    //   true;
    // }

    if (
      (this.serverName !== this.server.name ||
        this.server.status !== this.serverStatus) &&
      !this.changesSaved
    ) {
      return confirm('are y sure to discard changes ');
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    this.server = this.serverServes.getServer(
      +this.activated.snapshot.params['id']
    );
    this.activated.params.subscribe((param) => {
      this.server = this.serverServes.getServer(+param['id']);
    });

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serverServes.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activated });
  }
}
