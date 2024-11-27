import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

  formdata={
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
    password:""
  }

  onsubmit(){
    alert(JSON.stringify(this.formdata))
  }

  go(){
    this.routes.navigate(['/valuepass'])
  }

}
