import { Component, OnInit } from '@angular/core';
import	{FormControl}	from	'@angular/forms';	

@Component({
  selector: 'start-content',
  templateUrl: './start-content.component.html',
  styleUrls: ['./start-content.component.css']
})
export class StartContent {

  address: string = '';
  addressControl:FormControl =	new	FormControl();

  submitAddress():void	{	
    if(this.addressControl.valid)	{	
		  this.address	=	this.addressControl.value;	
		}	else	{	
		  alert("Docker remoteaddress wird benötigt!!");	
			}	
		}	
}

