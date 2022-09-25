import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { AllpatientsService } from 'src/app/services/report/allpatients.service';
import { DosageI } from 'src/app/models/dosage.interface';
import { PatientI } from 'src/app/models/patient.interface';
import { AuxDosageI } from 'src/app/models/auxdosage.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private apiService:ApiService, private allpatientsService:AllpatientsService, private router : Router) { }

  dosageI : DosageI[] = [];
  patients : PatientI[] = [];
  carerId = localStorage.getItem('carerId');
  containerInformation : AuxDosageI[] = [];

  ngOnInit(): void {
  }

}
