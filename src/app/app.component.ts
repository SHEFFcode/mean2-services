import { Component } from '@angular/core';
import {AComponent} from "./a/a.component";
import {BComponent} from "./b/b.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AComponent, BComponent]
})
export class AppComponent {
  title = 'app works!';
}
