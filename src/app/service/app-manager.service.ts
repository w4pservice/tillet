import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';


@Injectable()
export class AppManager {

  private dockerUrl: string = 'http://localhost:2375';
  private appName: string = 'Tillet Docker Client';

  constructor () {}

  public setUrl(url: string) :void {
      this.dockerUrl = url;
  }

  public getUrl() : string {
     return this.dockerUrl;
  }

  public getAppName() : string {
    return this.appName;
  }
}
