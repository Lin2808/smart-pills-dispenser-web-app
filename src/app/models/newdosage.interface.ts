import { MedicalTreatmentI } from "./medicaltreatment.interface";
import { PatientI } from "./patient.interface";
import { PillI } from "./pill.interface";

export interface NewDosageI
{
  id:number,
  quantity:number,
  dateHour:string,
  prescription:string,
  dateTake:string,
  pill:PillI,
  medicalTreatment:MedicalTreatmentI,
  patient:PatientI
}
