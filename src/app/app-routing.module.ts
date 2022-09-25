import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { EditcarerComponent } from './views/carer/editcarer/editcarer.component';
import { NewcarerComponent } from './views/carer/newcarer/newcarer.component';
import { ConfirmateaccountComponent } from './views/confirmateaccount/confirmateaccount.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { ListpatientComponent } from './views/patients/listpatient/listpatient.component';
import { MenupatientComponent } from './views/patients/menupatient/menupatient.component';
import { NewpatientComponent } from './views/patients/newpatient/newpatient.component';
import { NewmedicaltreatmentComponent } from './views/medicaltreatment/newmedicaltreatment/newmedicaltreatment.component';
import { EditmedicaltreatmentComponent } from './views/medicaltreatment/editmedicaltreatment/editmedicaltreatment.component';
import { NewdosageComponent } from './views/dosages/newdosage/newdosage.component';
import { EditdosageComponent } from './views/dosages/editdosage/editdosage.component';
import { ListmedicaltreatmentComponent } from './views/medicaltreatment/listmedicaltreatment/listmedicaltreatment.component';
import { NewdoctorComponent } from './views/doctor/newdoctor/newdoctor.component';
import { EditdoctorComponent } from './views/doctor/editdoctor/editdoctor.component';
import { ListdoctorComponent } from './views/doctor/listdoctor/listdoctor.component';
import { ListdosageComponent } from './views/dosages/listdosage/listdosage.component';
import { ListpillComponent } from './views/pill/listpill/listpill.component';
import { NewpillComponent } from './views/pill/newpill/newpill.component';
import { MenuComponent } from './views/reports/menu/menu.component';
import { PatientsComponent } from './views/reports/patients/patients.component';
import { PatientsnodosageComponent } from './views/reports/patientsnodosage/patientsnodosage.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'newpatient', component:NewpatientComponent},
  {path:'newpatient/:id', component:NewpatientComponent},
  {path:'confirmateaccount', component:ConfirmateaccountComponent},
  {path: 'newcarer', component:NewcarerComponent},
  {path: 'editcarer', component:EditcarerComponent},
  {path: 'listpatient', component:ListpatientComponent},
  {path: 'menupatient', component:MenupatientComponent},
  {path: 'newmedicaltreatment', component:NewmedicaltreatmentComponent},
  {path: 'editmedicaltreatment/:id', component:EditmedicaltreatmentComponent},
  {path: 'newdosage', component:NewdosageComponent},
  {path: 'editdosage/:id', component:EditdosageComponent},
  {path: 'listmedicaltreatment', component:ListmedicaltreatmentComponent},
  {path: 'newdoctor', component:NewdoctorComponent},
  {path: 'editdoctor/:id', component:EditdoctorComponent},
  {path: 'listdoctor', component:ListdoctorComponent},
  {path: 'listdosage', component:ListdosageComponent},
  {path: 'listpill', component:ListpillComponent},
  {path: 'newpill', component:NewpillComponent},
  {path: 'reportmenu', component:MenuComponent},
  {path: 'patienreport', component:PatientsComponent},
  {path: 'patientnodosagereport', component:PatientsnodosageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
