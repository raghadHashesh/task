import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front task';
  rout;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.rout = router;
  }

}
