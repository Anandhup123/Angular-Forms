import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-valuefetch',
  templateUrl: './valuefetch.component.html',
  styleUrls: ['./valuefetch.component.css']
})
export class ValuefetchComponent implements OnInit {
name_fetch=""

  constructor(private actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.name_fetch=this.actroute.snapshot.params['name']
  }

}
  