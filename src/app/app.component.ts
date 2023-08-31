import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router;
  title = 'front task';
  constructor(private route: ActivatedRoute) { 
    this.router=route
  }

}
