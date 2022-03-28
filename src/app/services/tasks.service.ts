import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
const API = environment.API_CAMUNDA+'task/';
const APII=environment.API_CAMUNDA+'history/task/'
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  public getcount(status:boolean ): Observable<any> {
    return this.http.get<any>(`${API}count?suspended=${status}`)
  }

  public getcounte(status:boolean ): Observable<any> {
    return this.http.get<any>(`${APII}count?unfinished=${status}`)
  }

  public getcountn(status:boolean): Observable<any>{
    return this.http.get<any>(`${API}count?unassigned=${status}`)
  }

  public getcounta(status:boolean): Observable<any>{
    return this.http.get<any>(`${APII}count?finished=${status}`)
  }

}
