import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent {
  ServerStatus:string="Online";
  serverId:number=10;
  allowAddServer:boolean=true;
  createdServer:string="No Server Created";
  serverCount=0;
  serverName="";
  isServerCreated:boolean=false;
  isServerClassStyle:boolean=false;
  servers:any=[];

serverStyle={
  "background-color":"green"
}
serverClassStyle={
  "serverClassStyle":this.isServerClassStyle
}

  getServerStatus(){
    if(this.ServerStatus=="Online"){
      return "server is running";
    }else{
      return "server is sleep";
    }
  }

  onAddServerClick(){
this.createdServer="Created sucssesfly";
this.serverCount++;
this.isServerCreated=true;
this.servers.push(this.serverName);
this.serverName="";
  }
}
