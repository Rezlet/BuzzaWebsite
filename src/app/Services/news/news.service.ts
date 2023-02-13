import { GlobalConstants } from './../../Shared/global-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiOption = GlobalConstants.apiURL;

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get<any[]>(
      this.apiOption + '/Promotion/GetAllPromotion?page=2&size=2',
      httpOptions
    );
  }
}
