//Component checklist:
//Create Class w/ Code to support the view
////Clear name, PascalCase, ap[pend "Component" to name, include the keyword "Export" on the class in order to allow it to be imported
//Decorator to define component Metadata that includes html for component's template
//import what we need

import { Component } from "@angular/core";

@Component({
  selector: 'pm-root', //directive(custom html tag)
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {

  pageTitle: string = 'Acme Product Management';

}