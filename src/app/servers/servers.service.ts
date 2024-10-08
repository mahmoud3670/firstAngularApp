import { Injectable } from '@angular/core';
import { Server } from './server.model';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  servers: Server[] = [
    {
      id: 1,
      name: 'prodction',
      status: 'online',
    },
    {
      id: 2,
      name: 'test',
      status: 'online',
    },
    {
      id: 3,
      name: 'QA',
      status: 'offline',
    },
  ];
  constructor() {}
  getServers(): Server[] {
    return this.servers;
  }
  getServer(id: number): Server {
    const server = this.servers.find((s) => {
      return s.id == id;
    });
    if (server) {
      return server;
    }
    return {
      id: 0,
      name: 'NAN',
      status: 'NAN',
    };
  }
  updateServer(id: number, serverInfo: { name: string; status: string }) {
    const server = this.getServer(id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
