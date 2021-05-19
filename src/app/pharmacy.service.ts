import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pharmacy } from './pharmacy';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private pharmacyUrl: string;

  constructor(private http: HttpClient) {
    this.pharmacyUrl = 'http://404project-env.eba-5r9as5pq.us-east-1.elasticbeanstalk.com/api/pharmacy';
  }

  public getPharmacies(): Observable<Pharmacy[]> {
    return this.http.get<Pharmacy[]>(`${this.pharmacyUrl}`);
  }

  public getPharmacy(pharmacyId: number): Observable<Pharmacy> {
    return this.http.get<Pharmacy>(`${this.pharmacyUrl}/${pharmacyId}`);
  }

  public addPharmacy(pharmacy: Pharmacy): Observable<Pharmacy> {
    return this.http.post<Pharmacy>(`${this.pharmacyUrl}`, pharmacy);
  }

  public updatePharmacy(pharmacy: Pharmacy): Observable<Pharmacy> {
    return this.http.put<Pharmacy>(`${this.pharmacyUrl}`, pharmacy);
  }

  public deletePharmacy(pharmacyId: number): Observable<void> {
    return this.http.delete<void>(`${this.pharmacyUrl}/${pharmacyId}`);
  }
}
