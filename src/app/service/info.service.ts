import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { DockerInfo } from '../model/docker.info';


@Injectable()
export class InfoService {

  private dockerUrl = 'http://localhost:2375/info';

  constructor (private http: Http) {}

  getInfo (): Observable<DockerInfo> {
    return this.http.get(this.dockerUrl)
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
