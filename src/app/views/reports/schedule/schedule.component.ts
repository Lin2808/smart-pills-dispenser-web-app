import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuxDosageI } from 'src/app/models/auxdosage.interface';
import { DosageI } from 'src/app/models/dosage.interface';
import { PatientI } from 'src/app/models/patient.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { AllpatientsService } from 'src/app/services/report/allpatients.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private router : Router, private apiService : ApiService, private allpatientsService: AllpatientsService) { }


  dosageI : DosageI[] = [];
  patients : PatientI[] = [];
  carerId = localStorage.getItem('carerId');
  containerInformation : AuxDosageI[] = [];

  ngOnInit(): void {
    this.containerInformation = [];
    const date = new Date();
    date.setMinutes(date.getMinutes() - 1);
    this.apiService.getPatientIdCarer(Number(this.carerId)).subscribe((data:any)=>{
      this.apiService.getAllDosages().subscribe((dosages:any)=>{
        for(let dosageList of dosages)
        {
          for(let patientList of data)
          {
            if(dosageList.medicalTreatment.patient.id == patientList.id)
            {
              //console.log(dosageList.medicalTreatment.patient.name + "   " + dosageList.medicalTreatment.description + "   " + dosageList.prescription + "    " + dosageList.dateTake);
              let dosageDate = new Date(dosageList.dateTake);
              dosageDate = new Date(dosageDate);
              console.log("Fecha actual " + date);
              if(dosageDate >= date && dosageList.state == true)
              {
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
      })
    })
  }

  printYourSchedule()
  {
    const header = ['Patient', 'Medical treatment', 'Dosage', 'Hour'];
    this.containerInformation = [];
    const date = new Date();
    date.setMinutes(date.getMinutes() - 1);
    this.apiService.getPatientIdCarer(Number(this.carerId)).subscribe((data:any)=>{
      this.apiService.getAllDosages().subscribe((dosages:any)=>{
        for(let dosageList of dosages)
        {
          for(let patientList of data)
          {
            if(dosageList.medicalTreatment.patient.id == patientList.id)
            {
              let dosageDate = new Date(dosageList.dateTake);
              dosageDate = new Date(dosageDate);
              if(dosageDate >= date && dosageList.state == true)
              {
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
        const body = Object(this.containerInformation).map((obj: any) => {
          const datos = [
            obj.name,
            obj.description,
            obj.prescription,
            obj.dateTake,
          ];
          return datos;
        });

        console.log('Body: ' + body);
          this.allpatientsService.print(header, body, 'Patient list', true);

      })
    })
  }

}
