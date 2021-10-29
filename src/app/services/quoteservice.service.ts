import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Quote } from '../model/quoteModel';

@Injectable({
  providedIn: 'root'
})
export class QuoteserviceService {

  quetosApiUrl = "https://quotes15.p.rapidapi.com/quotes/random/?rapidapi-key=API-KEY"
  constructor(private _http:HttpClient) { }

  getQuotesFromService():Observable<Quote>{
   return this._http.get<Quote>(this.quetosApiUrl)
  }

  
}
