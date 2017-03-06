import { Component } from '@angular/core';
import { AppManager } from '../service/app-manager.service';

@Component({
  selector: 'sidenav-menue',
  templateUrl: './sidenav-menue.component.html',
  styleUrls: ['./sidenav-menue.component.css']
})
export class SidenavMenue {

  name: string;

  constructor(private manager: AppManager){

    this.name=this.manager.getAppName();
  }

 }
