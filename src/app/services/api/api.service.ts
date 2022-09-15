import { Injectable } from '@angular/core';
import { CarerI } from '../../models/carer.interface';
import { PatientI } from '../../models/patient.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://smart-pills-dispenser.herokuapp.com/api/";

  constructor(private httpClient:HttpClient)
  {

  }

  loginCarer():Observable<CarerI[]>
  {
    let uri = this.url + "carer";
    return this.httpClient.get<CarerI[]>(uri);
  }

  registerCarer():Observable<CarerI[]>
  {
    let uri = this.url +"carer";
    return this.httpClient.get<CarerI[]>(uri);
  }

  getAllPatients():Observable<PatientI[]>
  {
    let uri = this.url + "patient";
    return this.httpClient.get<PatientI[]>(uri);
  }
}
