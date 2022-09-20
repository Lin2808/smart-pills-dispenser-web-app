import { MedicalTreatmentI } from "./medicaltreatment.interface";
import { PatientI } from "./patient.interface";

export interface DosageI
{
  id:number,
  quantity:number,
  registrationDate:string,
  dateHour:string,
  state:boolean,
  prescription:string,
  dateTake:string,
  pill:string,
  medicalTreatment:MedicalTreatmentI,
  patient:PatientI
}
