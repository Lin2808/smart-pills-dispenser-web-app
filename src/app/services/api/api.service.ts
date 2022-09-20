import { Injectable } from '@angular/core';
import { CarerI } from '../../models/carer.interface';
import { NewCarerI } from '../../models/newcarer.interface'
import { PatientListI } from '../../models/patientlist.interface';
import { PatientI } from '../../models/patient.interface';
import { NewPatientI  } from '../../models/newpatient.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { MedicalTreatmentI } from 'src/app/models/medicaltreatment.interface';
import { DoctorI } from 'src/app/models/doctor.interface';
import { NewDoctorI } from 'src/app/models/newdoctor.interface';
import { NewMedicalTreatmentI } from 'src/app/models/newmedicaltreatment.interface';
import { PillI } from 'src/app/models/pill.interface';
import { NewPillI } from 'src/app/models/newpill.interface';
import { DosageI } from 'src/app/models/dosage.interface';
import { NewDosageI } from 'src/app/models/newdosage.interface';

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
  getPatientIdCarer(id:number):Observable<PatientI>
  {
    let uri = this.url + "patient/bar/" + id;
    return this.httpClient.get<PatientI>(uri);
  }

  getAllMedicalTreatments():Observable<MedicalTreatmentI[]>
  {
    let uri = this.url + "medical-treatment";
    return this.httpClient.get<MedicalTreatmentI[]>(uri);
  }

  getMedicalTreatmentId(id:number):Observable<MedicalTreatmentI>
  {
    let uri = this.url + "medical-treatment/" + id;
    return this.httpClient.get<MedicalTreatmentI>(uri);
  }

  getMedicalTreatmentsIdPatient(id:number):Observable<MedicalTreatmentI>
  {
    let uri = this.url + "patient/medical-treatments/" + id;
    return this.httpClient.get<MedicalTreatmentI>(uri);
  }

  getDosageIdMedicalTreatments(id:number):Observable<DosageI>
  {
    let uri = this.url + "medical-treatment/dosages/" + id;
    return this.httpClient.get<DosageI>(uri);
  }

  getAllDoctor():Observable<DoctorI[]>
  {
    let uri = this.url + "doctor";
    return this.httpClient.get<DoctorI[]>(uri);
  }

  getAllPills():Observable<PillI[]>
  {
    let uri = this.url + "pill";
    return this.httpClient.get<PillI[]>(uri);
  }

  getPillId(id:number):Observable<PillI>
  {
    let uri = this.url + "pill/" + id;
    return this.httpClient.get<PillI>(uri);
  }

  getDoctorId(id:number):Observable<DoctorI>
  {
    let uri = this.url + "doctor/" + id;
    return this.httpClient.get<DoctorI>(uri);
  }

  registerDoctor(newDoctorI : NewDoctorI[] = []):Observable<NewDoctorI>
  {
    let uri = this.url + "doctor";
    return this.httpClient.post<NewDoctorI>(uri, newDoctorI[0]);
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

  registerMedicalTreatments(newMedicalTreatmentI : NewMedicalTreatmentI[] = []):Observable<NewMedicalTreatmentI>
  {
    let uri = this.url + "medical-treatment";
    return this.httpClient.post<NewMedicalTreatmentI>(uri, newMedicalTreatmentI[0]);
  }

  registerPill(newPillI : NewPillI[] = []):Observable<NewPillI>
  {
    let uri = this.url + "pill";
    return this.httpClient.post<NewPillI>(uri, newPillI[0]);
  }

  registerDosage(newDosageI : NewDosageI[] = []):Observable<NewDosageI>
  {
    let uri = this.url + "dosage";
    return this.httpClient.post<NewDosageI>(uri, newDosageI[0]);
  }

  updateCarerState(carerI:CarerI[] = [], id:number):Observable<CarerI>
  {
    let uri = this.url + "carer/" + id;
    return this.httpClient.put<CarerI>(uri, carerI[0]);
  }
}
