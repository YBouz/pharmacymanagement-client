import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-pharmacy-detail',
  templateUrl: './pharmacy-detail.component.html',
  styleUrls: ['./pharmacy-detail.component.css']
})
export class PharmacyDetailComponent implements OnInit {

  public items: Item[] = [];

  constructor(private pharmacyService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  // Item ----------------------------------------------->
  public getItems(): void {
    this.pharmacyService.getItems().subscribe(
      (response: Item[]) => {
        this.items = response;
        console.log(this.items);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchItems(key: string): void {
    console.log(key);
    const results: Item[] = [];
    for (const item of this.items) {
      if (item.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || item.description.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(item);
      }
    }
    this.items = results;
    if (results.length === 0 || !key) {
      this.getItems();
    }
  }

}
