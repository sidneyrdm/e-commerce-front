import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  httpOption = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' })
  }


  private url = 'https://api.sheety.co/f5a64236d448d4bd6b7d42de631dc2c3/books/conteudo';

  constructor(private http: HttpClient) { }

  getBook() {
    return this.http.get(this.url);
  }

  getBookSheet() {
    fetch(this.url)
      .then((response) => response.json())
      .then(json => {
        // Do something with the data
        console.log('json.conteudo = ',json.conteudo);
      });
  }
}
