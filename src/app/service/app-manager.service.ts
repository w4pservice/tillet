import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable }              from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class AppManager {

  private dockerUrl: string;
  private appName: string = 'Tillet Docker Client';
  private connected: boolean = false;
  private error: any;
  private apiVersion: string;

  constructor (private http: Http) {}

  public setUrl(url: string) :void {
      this.dockerUrl = url;
  }

  public getUrl() : string {
     return this.dockerUrl;
  }

  public getAppName() : string {
    return this.appName;
  }

  public setConnected(connected: boolean) {
    this.connected = connected;
  }

  public getConnected(): boolean {
    return this.connected;
  }

  public setApiVersion(version: string): void {
    this.apiVersion = version;
  }

  public getApiVersion(): string {
    return this.apiVersion;
  }

  public connectToHost(address: string) {
    this.http.get(address + "/version").subscribe(
      data => {
        this.setUrl(address);
        this.setConnected(true);
      },
      error => {
        alert(error)
      }
    );
  }
}
