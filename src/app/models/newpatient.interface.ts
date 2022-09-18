import { CarerI } from "./carer.interface";

export interface NewPatientI
{
  name:string;
  gender:string;
  birthDate:Date;
  carer:CarerI
}
