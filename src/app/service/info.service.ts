import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { DockerInfo } from '../model/docker-info.interface';
import { AppManager } from '../service/app-manager.service';

@Injectable()
export class InfoService {

  constructor (private http: Http, private manager: AppManager ) {}

  getInfo (): Observable<DockerInfo> {
    return this.http.get(this.manager.getUrl() + "/info")
                    .map((res:Response) => res.json())
                    .catch(this.handleError);
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
}
