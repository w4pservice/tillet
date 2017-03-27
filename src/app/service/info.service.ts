import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { DaemonInfo } from '../model/daemon-info';
import { DockerVersion } from '../model/docker-version.interface';
import { AppManager } from '../service/app-manager.service';

@Injectable()
export class InfoService {

  constructor (private http: Http, private manager: AppManager ) {}

  getInfo(): Observable<DaemonInfo> {
    return this.http.get('http://localhost:2375//info')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getVersion(): Observable<DockerVersion> {
    return this.http.get("http://localhost:2375/version")
                    .map((res:Response) => res.json())
                    .catch(this.handleError);
  }
}
