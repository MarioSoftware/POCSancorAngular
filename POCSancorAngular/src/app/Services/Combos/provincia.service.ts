import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provincia } from 'src/app/Components/ABM/Provincia/Interfaces/Provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http: HttpClient) { }

  getAllProvincias() {
    return this.http.get<Provincia[]>('https://localhost:44309/api/ProvinciaController/GetAll');
  }

  getProvinciasPorPais(id: number) {
    return this.http.get<Provincia[]>('https://localhost:44309/api/ProvinciaController/GetProvinciasPorPais/' + id);
  }
}
