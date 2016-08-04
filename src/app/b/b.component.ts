import { Component, OnInit } from '@angular/core';
import {LogService} from "../log.service";

@Component({
  moduleId: module.id,
  selector: 'app-b',
  templateUrl: 'b.component.html',
  styleUrls: ['b.component.css'],
  providers: [LogService]
})
export class BComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
  }

  onLog(value: string) {
    this.logService.writeToLog(value);
  }

}
