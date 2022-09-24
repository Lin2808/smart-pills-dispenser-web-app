import { MedicalTreatmentI } from "./medicaltreatment.interface";
import { PillI } from "./pill.interface";

export interface DosageI
{
  id:number,
  quantity:number,
  registrationDate:string,
  dateHour:string,
  state:boolean,
  prescription:string,
  dateTake:string,
  pill:PillI,
  medicalTreatment:MedicalTreatmentI
}
