import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../model/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

private apiUrl: string = environment.baseUrl

constructor(private http: HttpClient) { }

getAllVehiculos(): Observable<Vehiculo[]> {
  return this.http.get<Vehiculo[]>(this.apiUrl)
}

}
