import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientI } from '../../../models/patient.interface';
import { ApiService } from '../../../services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private router : Router, private apiService : ApiService ) { }

  //patientI : PatientI[] = [];
  patientI!: PatientI;

  formGroup = new FormGroup({
    //id: new FormGroup(''),
    state: new FormGroup(''),
    name: new FormGroup(''),
    gender: new FormGroup(''),
    birthDate: new FormGroup('')
  });

  ngOnInit(): void {
    let patientId = this.activatedRoute.snapshot.paramMap.get('id');
    let carerId = this.getCarerId();
    this.apiService.getPatientId(patientId).subscribe(data =>{
      //this.patientI = data[0];
      //console.log(this.patientI);
      //console.log(data);
      this.formGroup.setValue({
        //'id' : this.patientI.id,
        'state' : this.patientI.state,
        'name' : this.patientI.name,
        'gender' : this.patientI.gender,
        'birthDate' : this.patientI.birthDate
      })
  })
  }

  getCarerId()
  {
    return localStorage.getItem('carerId');;
  }

}
