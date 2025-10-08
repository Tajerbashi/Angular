import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from '../../models/Common/api-response';

export abstract class BaseApiService<T> {
  protected baseUrl = 'https://localhost:7162/api';

  constructor(protected readonly http: HttpClient, controller: string) {
    this.baseUrl = `${this.baseUrl}/${controller}`;
  }

  add(item: T): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(this.baseUrl, item).pipe(catchError(this.handleError));
  }

  update(id: number | string, item: T): Observable<ApiResponse<T>> {
    return this.http
      .put<ApiResponse<T>>(`${this.baseUrl}/${id}`, item)
      .pipe(catchError(this.handleError));
  }

  get(): Observable<ApiResponse<T[]>> {
    return this.http.get<ApiResponse<T[]>>(this.baseUrl).pipe(catchError(this.handleError));
  }

  getById(id: number | string): Observable<ApiResponse<T>> {
    return this.http
      .get<ApiResponse<T>>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  delete(id: number | string): Observable<ApiResponse<T>> {
    return this.http
      .delete<ApiResponse<T>>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  protected handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
}
