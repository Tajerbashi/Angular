import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface ApiResponse<T> {
  data: T;
  isSuccess: boolean;
  message: string;
  token: string;
  refreshToken: string;
}
export interface ApiConfig {
  baseUrl: string;
  defaultHeaders?: HttpHeaders;
  timeout?: number;
}

export interface RequestOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json' | 'arraybuffer' | 'blob' | 'text';
}
