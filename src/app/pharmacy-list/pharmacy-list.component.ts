import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pharmacy } from '../pharmacy';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-pharmacy-list',
  templateUrl: './pharmacy-list.component.html',
  styleUrls: ['./pharmacy-list.component.css']
})
export class PharmacyListComponent implements OnInit {

  public pharmacies: Pharmacy[] = [];
  public editPharmacy: Pharmacy;
  public deletePharmacy: Pharmacy;

  constructor(private pharmacyService: PharmacyService) { }

  ngOnInit() {
    this.getPharmacies();
  }

  // Pharmacy ----------------------------------------------->
  public getPharmacies(): void {
    this.pharmacyService.getPharmacies().subscribe(
      (response: Pharmacy[]) => {
        this.pharmacies = response;
        console.log(this.pharmacies);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPharmacy(addForm: NgForm): void {
    document.getElementById('add-pharmacy-form')?.click();
    this.pharmacyService.addPharmacy(addForm.value).subscribe(
      (response: Pharmacy) => {
        console.log(response);
        this.getPharmacies();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePharmacy(pharmacy: Pharmacy): void {
    this.pharmacyService.updatePharmacy(pharmacy).subscribe(
      (response: Pharmacy) => {
        console.log(response);
        this.getPharmacies();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePharmacy(pharmacyId: number): void {
    this.pharmacyService.deletePharmacy(pharmacyId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPharmacies();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchPharmacies(key: string): void {
    console.log(key);
    const results: Pharmacy[] = [];
    for (const pharmacy of this.pharmacies) {
      if (pharmacy.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || pharmacy.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || pharmacy.address.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(pharmacy);
      }
    }
    this.pharmacies = results;
    if (results.length === 0 || !key) {
      this.getPharmacies();
    }
  }

  public onOpenPharmacyModal(pharmacy: Pharmacy, mode: string): void {
    const container = document.getElementById('pharmacies-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addPharmacyModal');
    }

    if (mode === 'edit') {
      this.editPharmacy = pharmacy;
      button.setAttribute('data-target', '#updatePharmacyModal');
    }

    if (mode === 'delete') {
      this.deletePharmacy = pharmacy;
      button.setAttribute('data-target', '#deletePharmacyModal');
    }

    container?.appendChild(button);
    button.click();
  }

}
