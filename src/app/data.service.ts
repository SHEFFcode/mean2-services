import {LogService} from "./log.service";
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class DataService {
  pushedData = new EventEmitter();
  private data: string[] = [];

  constructor (private logService: LogService) {  }

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog('Saved item ' + input);
  }

  getData() {
    return this.data;
  }

  pushDataTo(value: string) {
    this.pushedData.emit(value);
  }

}
