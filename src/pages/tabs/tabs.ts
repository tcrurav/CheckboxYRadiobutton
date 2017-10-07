import { Component } from '@angular/core';

import { SexPage } from '../sex/sex';
import { SportsPage } from "../sports/sports";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SexPage;
  tab2Root = SportsPage;

  constructor() {

  }
}
