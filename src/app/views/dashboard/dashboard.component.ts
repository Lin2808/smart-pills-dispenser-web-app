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

  carerId = localStorage.getItem('carerId');

  constructor() { }

  ngOnInit(): void {
  }

}
