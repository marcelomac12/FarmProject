import { Injectable } from '@angular/core'
import { Farm } from './../models/Farm'
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

/*
const FARMS = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style app', isDone: true },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
];
*/

const baseUrl = `http://localhost:3000/`;


@Injectable({
  providedIn: 'root',
})
export class FarmService {
  constructor(private http: HttpClient) {}

  create(farm: Farm) {
    return this.http.post(baseUrl, farm);
  }

  read(id: number): Farm {
    return {} as any
  }

  list(): Farm[] {
    return []
  }

  getAll() {
    return this.http.get<Farm[]>(baseUrl);
}

  getById(id: string) {
      return this.http.get<Farm>(`${baseUrl}/${id}`);
  }
/*
  create(params: any) {
      return this.http.post(baseUrl, params);
  }
*/
  update(id: string, farm: Farm) {
      return this.http.put(`${baseUrl}/${id}`, farm);
  }

  delete(id: number) {
      return this.http.delete(`${baseUrl}/${id}`);
  }
}
