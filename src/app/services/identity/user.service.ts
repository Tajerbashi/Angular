import { Injectable } from '@angular/core';
import { BaseEntityService } from '../baseServices/base-entity.service';
import { HttpClient } from '@angular/common/http';
import { IUserDTO } from '../../models/Users/iuser-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseEntityService<IUserDTO> {
  constructor(protected override readonly http: HttpClient) {
    super(http, 'User');
  }
}
