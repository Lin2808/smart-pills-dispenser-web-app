import { CarerI } from "./carer.interface";

export interface PatientI
{
  id:string;
  registrationDate:Date;
  state:string;
  name:string;
  gender:string;
  birthDate:Date;
  carer:CarerI;
}
