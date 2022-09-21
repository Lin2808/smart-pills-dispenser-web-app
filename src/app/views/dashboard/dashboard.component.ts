import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientListI } from 'src/app/models/patientlist.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { AllpatientsService } from 'src/app/services/report/allpatients.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  patients : PatientListI[] = [];
  carerId = localStorage.getItem('carerId');

  constructor(private router : Router, private allpatientsService:AllpatientsService, private apiService:ApiService) { }

  ngOnInit(): void {
  }

  printReport()
  {
    const header = ["Id", "Name", "Registration date", "Gender", "Birthday"];
    /*const body = [["1", "Lin", "2022-09-15", "Male","1995-08-28"],
                  ["1", "Melina", "2022-09-15", "Male","1995-08-28"]];*/

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
                      }
                    )
                    console.log(body);
                    this.allpatientsService.print(header, body, "Patient list", true);
                  })
  }

}
