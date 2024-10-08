import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss',
})
export class ServersComponent implements OnInit {
  servers: { id: number; name: string; status: string }[] = [];
  constructor(private serverService: ServersService) {}
  ngOnInit(): void {
    this.servers = this.serverService.getServers();
  }
}
