import { ElementRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NewpatientComponent } from './views/patients/newpatient/newpatient.component';
import { EditpatientComponent } from './views/patients/editpatient/editpatient.component';
import { ConfirmateaccountComponent } from './views/confirmateaccount/confirmateaccount.component';
import { NewcarerComponent } from './views/carer/newcarer/newcarer.component';
import { EditcarerComponent } from './views/carer/editcarer/editcarer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListpatientComponent } from './views/patients/listpatient/listpatient.component';
import { MenupatientComponent } from './views/patients/menupatient/menupatient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewmedicaltreatmentComponent } from './views/medicaltreatment/newmedicaltreatment/newmedicaltreatment.component';
import { EditmedicaltreatmentComponent } from './views/medicaltreatment/editmedicaltreatment/editmedicaltreatment.component';
import { NewdosageComponent } from './views/dosages/newdosage/newdosage.component';
import { EditdosageComponent } from './views/dosages/editdosage/editdosage.component';
import { ListmedicaltreatmentComponent } from './views/medicaltreatment/listmedicaltreatment/listmedicaltreatment.component';
import { NewdoctorComponent } from './views/doctor/newdoctor/newdoctor.component';
import { ListdoctorComponent } from './views/doctor/listdoctor/listdoctor.component';
import { EditdoctorComponent } from './views/doctor/editdoctor/editdoctor.component';
import { ListdosageComponent } from './views/dosages/listdosage/listdosage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    NewpatientComponent,
    EditpatientComponent,
    ConfirmateaccountComponent,
    NewcarerComponent,
    EditcarerComponent,
    ListpatientComponent,
    MenupatientComponent,
    NewmedicaltreatmentComponent,
    EditmedicaltreatmentComponent,
    NewdosageComponent,
    EditdosageComponent,
    ListmedicaltreatmentComponent,
    NewdoctorComponent,
    ListdoctorComponent,
    EditdoctorComponent,
    ListdosageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
