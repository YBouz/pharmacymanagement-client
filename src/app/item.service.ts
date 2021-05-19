import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl: string;

  constructor(private http: HttpClient) {
    this.itemsUrl = `http://404project-env.eba-5r9as5pq.us-east-1.elasticbeanstalk.com/api/item`;
  }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.itemsUrl}`);
  }

  public deleteItem(itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.itemsUrl}/${itemId}`);
  }
}
