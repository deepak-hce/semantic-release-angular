import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ApiClient } from 'api-client-typescript/lib';
import { DynamicComponent } from './components/dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'integrate-api-client';
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor() {}

  ngAfterViewInit() {}
}
