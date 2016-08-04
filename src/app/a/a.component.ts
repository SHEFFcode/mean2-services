import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  moduleId: module.id,
  selector: 'app-a',
  templateUrl: 'a.component.html',
  styleUrls: ['a.component.css'],
  providers: [LogService]
})
export class AComponent implements OnInit {
  value = '';
  constructor(private logService: LogService) { }

  ngOnInit() {
  }

  onLog(value: string) {
    this.logService.writeToLog(value);
  }

}
