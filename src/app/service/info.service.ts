import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { DockerVersion } from '../model/docker-version';
import { AppManager } from '../service/app-manager.service';

@Injectable()
export class InfoService {

  data: Object;

  constructor (private http: Http, private manager: AppManager ) {}

  getInfo (): Observable<string> {
    return this.http.get(this.manager.getUrl() + "/info")
                    .map(this.getData)
                    .catch(this.handleError);
  }

  getData(res: Response) {
    let body = res.json()
    return JSON.stringify(body,null,4);
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
