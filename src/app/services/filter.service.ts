import { Injectable } from '@angular/core';
import { AbstractBaseService } from './base.service';
import { IGenre } from '../shared/Genre';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilterService extends AbstractBaseService<IGenre>{

  constructor( _http: HttpClient) {
    super(_http, "webapi");
  }

}
