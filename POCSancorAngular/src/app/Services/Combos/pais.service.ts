import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from 'src/app/Components/ABM/Pais/Interfaces/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getAllPaises() {
    return this.http.get<Pais[]>('https://localhost:44309/api/PaisController/GetAll');
  }
}
