import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {LogService} from "./app/log.service";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [LogService]);
