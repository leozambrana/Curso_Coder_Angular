import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Teste',
    icon: 'home',
    routeUrl:''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(HeaderData: HeaderData) {
    this._headerData.next(HeaderData)
  }
}
