import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-individul-server',
  templateUrl: './individul-server.component.html',
  styleUrl: './individul-server.component.scss',
})
export class IndividulServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  constructor(
    private serverServes: ServersService,
    private activated: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.server = this.serverServes.getServer(
    //   +this.activated.snapshot.params['id']
    // );
    // this.activated.params.subscribe((param: Params) => {
    //   this.server = this.serverServes.getServer(+param['id']);
    // });
    this.activated.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }
  editServer() {
    this.router.navigate(['edit'], { relativeTo: this.activated });
  }
}
