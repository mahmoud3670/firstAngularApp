import { Component, Input } from '@angular/core';
import {IServer} from '../Contract/IServer'

@Component({
  selector: 'app-printing-server',
  templateUrl: './printing-server.component.html',
  styleUrl: './printing-server.component.scss'
})
export class PrintingServerComponent {
  @Input() server:IServer
}
