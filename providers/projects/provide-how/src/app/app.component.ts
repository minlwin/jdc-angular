import { Component, HostListener, Inject, InjectionToken, OnDestroy, OnInit } from '@angular/core';
import { ID_GEN } from './usage/model/id-gen';
import { CATEGORY_REPO, PRODUCT_REPO } from './usage/model/repository';
import { Storage } from './usage/model/storage';

const STORAGES = new InjectionToken('storages')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    { provide: STORAGES, useExisting: ID_GEN, multi: true },
    { provide: STORAGES, useExisting: CATEGORY_REPO, multi: true },
    { provide: STORAGES, useExisting: PRODUCT_REPO, multi: true },
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(@Inject(STORAGES) private storages: Storage[]) { }

  ngOnInit(): void {
    this.storages.forEach(s => s.loadData())
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.storages.forEach(s => s.saveData())
  }

}
