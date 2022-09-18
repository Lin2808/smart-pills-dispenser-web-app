import { CarerI } from "./carer.interface";

export interface PatientI
{
  id:number;
  state:string;
  name:string;
  gender:string;
  birthDate:Date;
  carer:CarerI;
}
