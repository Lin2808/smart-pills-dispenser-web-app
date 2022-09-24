import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { AllpatientsService } from 'src/app/services/report/allpatients.service';
import { PatientListI } from 'src/app/models/patientlist.interface';
import { DosageI } from 'src/app/models/dosage.interface';
import { PatientI } from 'src/app/models/patient.interface';
import { AuxDosageI } from 'src/app/models/auxdosage.interface';

@Component({
  selector: 'app-reportmenu',
  templateUrl: './reportmenu.component.html',
  styleUrls: ['./reportmenu.component.css']
})
export class ReportmenuComponent implements OnInit {

  constructor(private apiService:ApiService, private allpatientsService:AllpatientsService, private router : Router) { }

  dosageI : DosageI[] = [];
  patients : PatientI[] = [];
  carerId = localStorage.getItem('carerId');
  containerInformation : AuxDosageI[] = [];

  ngOnInit(): void {
  }

  printYourPatientsReport()
  {
    const header = ["Id", "Name", "Registration date", "Gender", "Birthday"];
    this.apiService.getPatientIdCarer(Number(this.carerId)).subscribe(data =>{
      const body = Object(data).map(
        (obj:any)=>{
          const datos = [
            obj.id,
            obj.name,
            obj.registrationDate,
            obj.gender,
            obj.birthDate
          ]
          return datos;
        })
        console.log(body);
        this.allpatientsService.print(header, body, "Patient list", true);
      }
    )
  }

  printYourPatientsNoDosage()
  {
    this.containerInformation = [];
    const date = new Date();
    const header = ["Patient", "Medical treatment", "Dosage", "Hour"];
    this.apiService.getPatientIdCarer(Number(this.carerId)).subscribe((data:any)=>{
      this.apiService.getAllDosages().subscribe((dosages:any)=>{
        for(let dosageList of dosages)
        {
          for(let patientList of data)
          {
            if(dosageList.medicalTreatment.patient.id == patientList.id)
            {
              let dosageDate = new Date(dosageList.dateTake);
              dosageDate.setMinutes(dosageDate.getMinutes() + 5);
              dosageDate = new Date(dosageDate);
              if(dosageDate <= date && dosageList.state == true)
              {
                //console.log(dosageList.medicalTreatment.patient.name + "   " + dosageList.medicalTreatment.description + "   " + dosageList.prescription + "    " + dosageList.dateTake);

                this.containerInformation.push({
                  name : dosageList.medicalTreatment.patient.name,
                  description : dosageList.medicalTreatment.description,
                  prescription : dosageList.prescription,
                  dateTake : dosageList.dateTake
                });
              }
            }
          }

        }
        const body = Object(this.containerInformation).map(
          (obj:any)=>{
            const datos = [
              obj.name,
              obj.description,
              obj.prescription,
              obj.dateTake
            ]
            return datos;
          })
          console.log("Body: " + body);
          this.allpatientsService.print(header, body, "Patient list", true);
      })
    })

  }
}
