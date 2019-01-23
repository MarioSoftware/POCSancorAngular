import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ciudad } from 'src/app/Components/ABM/Ciudad/Interfaces/Ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Ciudad[]>('https://localhost:44309/api/CiudadController/GetAll');
  }

  getCiudadesPorProvincia(id: number) {
    return this.http.get<Ciudad[]>('https://localhost:44309/api/CiudadController/GetCiudadesPorProvincia/' + id);
  }
}
