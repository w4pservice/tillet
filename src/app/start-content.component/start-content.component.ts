import { Component, OnInit } from '@angular/core';
import	{FormControl}	from	'@angular/forms';

import { InfoService } from '../service/info.service';
import { AppManager } from '../service/app-manager.service';

@Component({
  selector: 'start-content',
  templateUrl: './start-content.component.html',
  styleUrls: ['./start-content.component.css']
})
export class StartContent {

  address: string = '';
  addressControl:FormControl =	new	FormControl();

  constructor( private manager: AppManager) {
    this.manager.setUrl('');
    this.manager.setConnected(false);
   }

  submitAddress():void	{	
    if(this.addressControl.valid)	{	
		  this.address	=	this.addressControl.value;
      this.testUrlString();
      this.manager.connectToHost(this.address);
		}	else	{	
		  alert("Docker Remote Adresse wird benötigt!!");	
			}	
		}

    private testUrlString(): void {
      if(!this.address.startsWith("http://")) { this.address = "http://" + this.address }
    }

}

