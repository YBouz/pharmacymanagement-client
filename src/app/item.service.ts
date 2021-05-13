import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private pharmacyId: number;
  private itemsUrl: string;

  constructor(private http: HttpClient) {
    this.itemsUrl = `http://localhost:8080/api/item`;
  }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.itemsUrl}`);
  }

  public deleteItem(itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.itemsUrl}/${itemId}`);
  }
}
