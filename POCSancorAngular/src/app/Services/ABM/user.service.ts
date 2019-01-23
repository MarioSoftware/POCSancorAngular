import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/Components/ABM/User/Interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get<Usuario[]>('https://localhost:44309/api/UserController/GetAll');
  }

  getUser(id: number) {
    return this.http.get<Usuario>('https://localhost:44309/api/UserController/Get/' + id);
  }

  insertUser(data: any) {
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    return this.http.post('https://localhost:44309/api/UserController/Save', data, {headers}).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  }

  editUser( data: any, id: number) {
    return this.http.post('https://localhost:44309/api/UserController/Modify', data);
  }

  deleteUser(id: number) {
    return this.http.get('https://localhost:44309/api/UserController/Delete/' + id);
  }
}
