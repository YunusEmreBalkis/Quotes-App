import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Quote } from '../model/quoteModel';

@Injectable({
  providedIn: 'root'
})
export class QuoteserviceService {

  quetosApiUrl = "https://quotes15.p.rapidapi.com/quotes/random/?rapidapi-key=737b725379msh219e2f7870f346ap11e5bejsn9f752551c1d2"
  constructor(private _http:HttpClient) { }

  getQuotesFromService():Observable<Quote>{
   return this._http.get<Quote>(this.quetosApiUrl)
  }

  
}
