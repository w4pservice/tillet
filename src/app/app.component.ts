import { Component } from '@angular/core';
import { AppManager } from './service/app-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;

  constructor(private manager: AppManager) {
    this.name=this.manager.getAppName();
  }
}
