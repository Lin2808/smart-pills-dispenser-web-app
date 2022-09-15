import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { EditcarerComponent } from './views/carer/editcarer/editcarer.component';
import { NewcarerComponent } from './views/carer/newcarer/newcarer.component';
import { ConfirmateaccountComponent } from './views/confirmateaccount/confirmateaccount.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { EditpatientComponent } from './views/patients/editpatient/editpatient.component';
import { ListpatientComponent } from './views/patients/listpatient/listpatient.component';
import { NewpatientComponent } from './views/patients/newpatient/newpatient.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'editpatient', component:EditpatientComponent},
  {path:'newpatient', component:NewpatientComponent},
  {path:'confirmateaccount', component:ConfirmateaccountComponent},
  {path: 'newcarer', component:NewcarerComponent},
  {path: 'editcarer', component:EditcarerComponent},
  {path: 'listpatient', component:ListpatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
