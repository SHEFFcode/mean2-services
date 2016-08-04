import { Component } from '@angular/core';
import {AComponent} from "./a/a.component";
import {BComponent} from "./b/b.component";
import {DataService} from "./data.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AComponent, BComponent],
  providers: [DataService]
})
export class AppComponent {
  title = 'app works!';
}
