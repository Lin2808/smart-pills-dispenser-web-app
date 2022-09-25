import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuxDosageI } from 'src/app/models/auxdosage.interface';
import { DosageI } from 'src/app/models/dosage.interface';
import { PatientListI } from 'src/app/models/patientlist.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { AllpatientsService } from 'src/app/services/report/allpatients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients : PatientListI[] = [];
  carerId = localStorage.getItem('carerId');
  dosageI : DosageI[] = [];
  containerInformation : AuxDosageI[] = [];

  constructor(private apiService:ApiService, private allpatientsService:AllpatientsService, private router : Router) { }

  ngOnInit(): void {
    this.apiService.getPatientIdCarer(Number(this.carerId)).subscribe((data:any)=>{
      this.patients = data;
      console.log(data);
    })
  }
  printYourPatientsReport()
  {
    const header = ["Id", "Name", "Gender", "Birthday", "Registration date"];
    this.apiService.getPatientIdCarer(Number(this.carerId)).subscribe(data =>{
      const body = Object(data).map(
        (obj:any)=>{
          const datos = [
            obj.id,
            obj.name,
            obj.gender,
            obj.birthDate,
            obj.registrationDate,
          ]
          return datos;
        })
        console.log(body);
        this.allpatientsService.print(header, body, "Patient list", true);
      }
    )
  }

}
