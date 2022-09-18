import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { PatientI } from '../../../models/patient.interface';
import { CarerI } from 'src/app/models/carer.interface';

@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css']
})
export class NewpatientComponent implements OnInit {

  patientI!: PatientI;
  carer!: CarerI;
  formGroup = new FormGroup({
    //Conecto los componentes html con el login.component
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
  });

  title: string = "Register patient";
  constructor(private apiService : ApiService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }
  create()
  {
    console.log(this.formGroup.value);
    //this.apiService.registerPatient(this.patientI).subscribe(data =>{
      //console.log(data);
    //})
  }

}
