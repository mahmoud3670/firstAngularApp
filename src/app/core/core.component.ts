import { Output,Component, EventEmitter } from '@angular/core';
import {IServer} from '../Contract/IServer'

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  serverName:string='';
  serverType:string='';
  @Output() newServerEvent = new EventEmitter<IServer>();
  @Output() removeServerEvent = new EventEmitter<string>();
  onAddServer(){
    if(this.serverName==""||this.serverType=="")
      return;
    this.newServerEvent.emit({name:this.serverName,type:this.serverType});
    this.serverName="";
    this.serverType="";
  }
  onRemoveServer(){
    if(this.serverName=="")
      return;
    this.removeServerEvent.emit(this.serverName);
    this.serverName="";
    this.serverType="";
  }
}
