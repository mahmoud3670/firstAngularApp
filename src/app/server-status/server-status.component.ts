import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent {
  ServerStatus:string="Online";
  serverId:number=10;
  allowAddServer:boolean=false;

  getServerStatus(){
    if(this.ServerStatus=="Online"){
      return "server is running";
    }else{
      return "server is sleep";
    }
  }
}
