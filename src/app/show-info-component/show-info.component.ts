import { Component, OnInit } from '@angular/core';
import { InfoService } from '../service/info.service';
import { AppManager } from '../service/app-manager.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfo implements OnInit {

  info:   string;
  error:  string;

  constructor( private infoService: InfoService, private manager: AppManager ) { }

  ngOnInit() : void {
    this.infoService.getInfo().subscribe(
      info => {
        this.info = info;
        this.manager.setConnected(true);
      },
      error => {
        this.error = error;
        this.manager.setConnected(false);
      }
    );
  }
}
