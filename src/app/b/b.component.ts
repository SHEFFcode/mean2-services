import { Component, OnInit } from '@angular/core';
import {LogService} from "../log.service";
import {DataService} from "../data.service";

@Component({
  moduleId: module.id,
  selector: 'app-b',
  templateUrl: 'b.component.html',
  styleUrls: ['b.component.css']
})
export class BComponent implements OnInit {
  value = '';
  items: string[] = [];
  constructor(private logService: LogService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.pushedData.subscribe(
      (data) => this.value = data
    );
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

}
