import { DoctorI } from "./doctor.interface";
import { PatientI } from "./patient.interface";

export interface MedicalTreatmentI
{
  id:number,
  description:string,
  registrationDate:string,
  startDate: string,
  state: boolean,
  doctor:DoctorI,
  patient:PatientI
}

