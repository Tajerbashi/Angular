import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseEntityService<T> extends BaseApiService<T> {
  constructor(protected override readonly http: HttpClient, controller: string) {
    super(http, controller);
  }
}
