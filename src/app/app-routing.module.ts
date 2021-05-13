import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PharmacyDetailComponent } from './pharmacy-detail/pharmacy-detail.component';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'pharmacies', component: PharmacyListComponent},
  { path: 'pharmacies/detail', component: PharmacyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
