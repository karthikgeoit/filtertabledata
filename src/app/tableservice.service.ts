import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Tabledata } from './tabledata';
@Injectable({
  providedIn: 'root'
})
export class TableserviceService {

  constructor(private http: HttpClient) { }
  gettable1Data():Observable<Tabledata[]>{
return this.http.get<Tabledata[]>('api/table1data')
  }
  gettable2Data():Observable<Tabledata[]>{
    return this.http.get<Tabledata[]>('api/table2data')
      }
}
