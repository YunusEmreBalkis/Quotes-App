import { Component, OnInit } from '@angular/core';
import { Quote } from '../model/quoteModel';
import { QuoteserviceService } from '../services/quoteservice.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:any= {};
  originator:any={};
  constructor(private quoteservice:QuoteserviceService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(){
    this.quoteservice.getQuotesFromService().subscribe(response=>{
      this.quotes = response
      this.originator = response.originator
      console.log(response);
      
    })
  }

}
