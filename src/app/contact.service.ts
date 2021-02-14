import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private api = 'https://mailthis.to/pwmcbrid';

  constructor(private http: HttpClient) { }

  PostMesssage (input: any) {
    return this.http.post(this.api, input, {responseType: 'text'}).pipe(
    (response: any) => {
        if (response) {
          return response;
        }
      },
        (error: any) => {
          return error;
        })
  }
}
