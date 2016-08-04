import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import {DataService} from "../data.service";

@Component({
  moduleId: module.id,
  selector: 'app-a',
  templateUrl: 'a.component.html',
  styleUrls: ['a.component.css']
})
export class AComponent implements OnInit {
  value = '';
  items: string[] = [];
  constructor(private logService: LogService, private dataService: DataService) { }

  ngOnInit() {
  }

  onLog(value: string) {
    this.logService.writeToLog(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }

  onGet() {
    this.items = this.dataService.getData();
  }

  onSend(value: string) {
    this.dataService.pushDataTo(value);
  }

}
