import { Component } from '@angular/core';
import {IServer} from '../Contract/IServer'

@Component({
  selector: 'app-server-generator',
  templateUrl: './server-generator.component.html',
  styleUrl: './server-generator.component.scss'
})
export class ServerGeneratorComponent {

servers:IServer[]=[]
onAddServer(server:IServer){
  if(server.name==""||server.type=="")
    return;
  this.servers.push(server);
}
onRemoveServer(name:string){
  if(name=="")
    return;
  this.servers = this.servers.filter(obj => obj.name !== name);
}
}
