import { ElementRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ListpatientComponent } from './views/patients/listpatient/listpatient.component'

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
    ListpatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
