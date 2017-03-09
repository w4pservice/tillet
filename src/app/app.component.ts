import { Component, Input } from '@angular/core';
import { AppManager } from './service/app-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = '';
  @Input() connected: boolean

  constructor(private manager: AppManager) {
    this.name=this.manager.getAppName();
    this.connected = this.manager.getConnected();
  }

  testConnected(): boolean {
    this.connected = this.manager.getConnected();
    return this.connected;
  }
}
