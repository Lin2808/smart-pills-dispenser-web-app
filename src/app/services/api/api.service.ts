import { Injectable } from '@angular/core';
import { CarerI } from '../../models/carer.interface';
import { PatientListI } from '../../models/patientlist.interface';
import { PatientI } from '../../models/patient.interface';

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

  getCarerId(id:number):Observable<CarerI>
  {
    let uri = this.url + "carer/" + id;
    return this.httpClient.get<CarerI>(uri);
  }

  getAllPatients():Observable<PatientListI[]>
  {
    let uri = this.url + "patient";
    return this.httpClient.get<PatientListI[]>(uri);
  }

  getPatientId(id:number):Observable<PatientI>
  {
    let uri = this.url + "patient/" + id;
    return this.httpClient.get<PatientI>(uri);
  }

  registerCarer(carerI : CarerI):Observable<CarerI>
  {
    let uri = this.url + "carer";
    return this.httpClient.post<CarerI>(uri, carerI);
  }
  registerPatient(patientI : Object):Observable<PatientI>
  {
    console.log(patientI);
    let uri = this.url + "patient";
    return this.httpClient.post<PatientI>(uri, patientI);
  }
}
