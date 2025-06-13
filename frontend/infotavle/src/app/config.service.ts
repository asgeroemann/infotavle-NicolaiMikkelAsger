import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import * as Config from '../../public/config.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: any = (Config as any).default;

  constructor() { 
  }

}
