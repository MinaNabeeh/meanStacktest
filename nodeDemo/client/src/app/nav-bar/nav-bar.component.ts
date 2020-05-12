import { Component, OnInit } from '@angular/core';
import { Globals} from '../services/globals'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  globals: Globals;
  constructor(globals: Globals) { 
    this.globals = globals;
  }

  ngOnInit() {
  }

}
