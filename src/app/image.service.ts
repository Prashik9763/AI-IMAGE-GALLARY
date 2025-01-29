import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = 'your-api-url'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  getImages(): Observable<{ images: any[] }> {
    return this.http.get<{ images: any[] }>(this.apiUrl); // Ensure the response is typed correctly
  }
}
