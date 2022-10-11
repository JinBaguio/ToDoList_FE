import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { HttpClient } from '@angular/common/http';
import { todoListModel } from 'src/app/models/todoListModel'

var apiUrl = "https://m7bclu3jb9.execute-api.us-east-1.amazonaws.com/test";

var httpLink = {
  getAllList: apiUrl + "/getlist",
  deleteListById: apiUrl + "/deletelist",
  getListById: apiUrl + "/getlistbyid?no=",
  addList: apiUrl + "/addlist",
  updateList: apiUrl + "/updatelist"
  
}
@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  http: any;
  constructor(private webApiService: WebApiService, private httpClient: HttpClient) { }

  public getAllList(): Observable<any>{
    return this.httpClient.get<any>(httpLink.getAllList);
  }
  public deleteListById(id: string): Observable<any> {
    return this.webApiService.post(httpLink.deleteListById + '?id=' + id, "");
  }

  public getListById(no: string): Observable<todoListModel> {
    return this.httpClient.get<any>(httpLink.getListById + no);
  }

  public updateList(model: any): Observable<any> {
    return this.webApiService.post(httpLink.updateList, model);
  }

  public addList(model: any): Observable<any> {
    return this.webApiService.post(httpLink.addList, model);
  }
  
}       