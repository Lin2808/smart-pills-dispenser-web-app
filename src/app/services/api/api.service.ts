import { Injectable } from '@angular/core';
import { CarerI } from '../../models/carer.interface';
import { NewCarerI } from '../../models/newcarer.interface'
import { PatientListI } from '../../models/patientlist.interface';
import { PatientI } from '../../models/patient.interface';
import { NewPatientI  } from '../../models/newpatient.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { MedicalTreatmentI } from 'src/app/models/medicaltreatment.interface';

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

  getAllMedicalTreatments():Observable<MedicalTreatmentI[]>
  {
    let uri = this.url + "medical-treatment";
    return this.httpClient.get<MedicalTreatmentI[]>(uri);
  }

  registerCarer(newCarerI : NewCarerI[] = []):Observable<NewCarerI>
  {
    let uri = this.url + "carer";
    return this.httpClient.post<NewCarerI>(uri, newCarerI[0]);
  }
  registerPatient(newPatientI : NewPatientI[] = []):Observable<NewPatientI>
  {
    let uri = this.url + "patient";
    return this.httpClient.post<NewPatientI>(uri, newPatientI[0]);
  }
}
