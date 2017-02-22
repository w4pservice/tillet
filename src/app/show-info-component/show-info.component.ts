import { Component, OnInit } from '@angular/core';
import { InfoService } from '../service/info.service';
import { DockerInfo } from '../model/docker.info';

@Component({
  selector: 'show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfo implements OnInit {

  info: DockerInfo = new DockerInfo();

  constructor( private infoService: InfoService ) { }

  ngOnInit() : void { 
    this.infoService.getInfo()
        .subscribe( info => this.info = info )
        .unsubscribe();

  }
}
