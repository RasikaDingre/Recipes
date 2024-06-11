import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedApiService {

  constructor(
    private http: HttpClient
  ) { }
  dataURL: string = "https://dummyjson.com/recipes";

  getData() {
    return this.http.get(this.dataURL)
  }

  getByParam(const1:any, param1: any) {
    return this.http
      .get(`${this.dataURL}/search?${const1}=${param1}`)
      .pipe(
        map((resp: any) => {
          return resp
            ? { status: true, data: resp }
            : { status: false, data: '' };
        })
      );
  }
  getById(const1:any) {
    return this.http
      .get(`${this.dataURL}/${const1}`)
      .pipe(
        map((resp: any) => {
          return resp
            ? { status: true, data: resp }
            : { status: false, data: '' };
        })
      );
  }
}
