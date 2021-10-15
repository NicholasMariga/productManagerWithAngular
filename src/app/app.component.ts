import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <!--
  <div><h1>{{pageTitle}}</h1>
       <pm-products></pm-products>

  </div>-->

  <!-- Using routing-->
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
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
  pageTitle: string = 'SlimGuy Product Management';
}