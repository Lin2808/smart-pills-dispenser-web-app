import { DoctorI } from "./doctor.interface";
import { PatientI } from "./patient.interface";

export interface NewMedicalTreatmentI
{
  description:string,
  startDate: string,
  doctor:DoctorI,
  patient:PatientI
}
