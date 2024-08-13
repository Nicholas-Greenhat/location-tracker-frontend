import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocationByPhone(phoneNumber: string): Observable<any> {
    return this.http.post(`${API_URL}/track-location`, { phoneNumber });
  }
}
