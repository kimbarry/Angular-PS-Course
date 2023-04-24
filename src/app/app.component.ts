//Component checklist:
//Create Class w/ Code to support the view
////Clear name, PascalCase, ap[pend "Component" to name, include the keyword "Export" on the class in order to allow it to be imported
//Decorator to define component Metadata that includes html for component's template
//import what we need

import { Component } from "@angular/core";

@Component({
  selector: 'pm-root', //directive(custom html tag)
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav nav-pills">
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/products'>Product List</a></li>
    </ul>
  </nav> 
  <div class='container'>
    <router-outlet></router-outlet>
  </div> 
  `
})
export class AppComponent {

  pageTitle: string = 'Acme Product Management';

}