import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';
import { PharmacyListComponent } from './pharmacy-list/pharmacy-list.component';
import { PharmacyService } from './pharmacy.service';
import { PharmacyDetailComponent } from './pharmacy-detail/pharmacy-detail.component';
import { ItemService } from './item.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    PharmacyListComponent,
    PharmacyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService, PharmacyService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
