import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-valuepass',
  templateUrl: './valuepass.component.html',
  styleUrls: ['./valuepass.component.css']
})
export class ValuepassComponent implements OnInit {
  name = ""
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.route.navigate(['/valuefetch', this.name])
  }
}
