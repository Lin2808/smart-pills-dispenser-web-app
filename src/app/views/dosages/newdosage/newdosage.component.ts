import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewDosageI } from 'src/app/models/newdosage.interface';
import { PillI } from 'src/app/models/pill.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-newdosage',
  templateUrl: './newdosage.component.html',
  styleUrls: ['./newdosage.component.css']
})
export class NewdosageComponent implements OnInit {


  formGroup = new FormGroup({
    prescription: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    selectDateElement: new FormControl('', Validators.required),
    selectHourElement: new FormControl('', Validators.required),
    pill: new FormControl('', Validators.required),
  });

  pills:PillI[] = [];
  newDosage:NewDosageI[] = [];
  title:string = "Register dosage";
  medicalTreatmentId = localStorage.getItem('medicalTreatmentId');


  @ViewChild('prescriptionElement') prescriptionElement: ElementRef | undefined;
  @ViewChild('quantityElement') quantityElement: ElementRef | undefined;
  @ViewChild('selectDateElement') selectDateElement: ElementRef | undefined;
  @ViewChild('selectHourElement') selectHourElement: ElementRef | undefined;
  @ViewChild('pillElement') pillElement: ElementRef | undefined;

  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {

    this.apiService.getAllPills().subscribe((data) => {
      this.pills = data;
      console.log(data);
    });
  }
  pillName:any;

  getPillId(id: any, name: any) {
    localStorage.setItem('pillId', id);
    console.log(id);
    this.pillName = name;
  }

  create() {
    const pillId = localStorage.getItem('pillId');
    this.apiService.getPillId(Number(pillId)).subscribe((pill) => {
        this.apiService.getMedicalTreatmentId(Number(this.medicalTreatmentId)).subscribe((medicalTreatment) => {
            const finalDate = this.selectDateElement?.nativeElement.value + "T" + this.selectHourElement?.nativeElement.value;
            console.log(finalDate);

            this.newDosage.push({
              quantity: this.quantityElement?.nativeElement.value,
              dateHour: finalDate,
              prescription: this.prescriptionElement?.nativeElement.value,
              dateTake: finalDate,
              pill:pill,
              medicalTreatment: medicalTreatment,
            });

            console.log(this.newDosage);

            this.apiService.registerDosage(this.newDosage).subscribe((data: any) => {
                this.router.navigate(['listdosage']);
              });
          });
      });
  }

}
