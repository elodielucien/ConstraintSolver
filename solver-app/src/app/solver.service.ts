import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InputObject } from './inputObject';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolverService {

  private inputUrl = 'input';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http : HttpClient) { }


  //PUT : update input on the server
  public updateInput(input : InputObject) : Observable<any> {
    return this.http.put(this.inputUrl, input, this.httpOptions).pipe(catchError(this.handleError<any>('updateInput'))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };



  resolve(){}
}
