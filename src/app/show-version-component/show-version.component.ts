import { Component, OnInit } from '@angular/core';
import { InfoService } from '../service/info.service';
import { AppManager } from '../service/app-manager.service';
import { DockerVersion } from '../model/docker-version';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'show-version',
  templateUrl: './show-version.component.html',
  styleUrls: ['./show-version.component.css']
})
export class ShowVersion implements OnInit {

  version: DockerVersion = new DockerVersion();
  error:  string;

  constructor( private infoService: InfoService, private manager: AppManager ) { }

  ngOnInit() : void {

    this.infoService.getVersion().subscribe(
    version => this.version = version,
    error => this.error = <any>error);
    this.manager.setApiVersion(this.version.ApiVersion)
  }
}