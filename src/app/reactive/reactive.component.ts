import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  submit=false
  regForm=this.fb.group({
    first_name:['', Validators.required],
    last_name:['', Validators.required],
    phone:['', [Validators.required,Validators.pattern('[7-9]{1}[0-9]{9}')]],
    email:['', [Validators.required,Validators.email]],
    password:['', [Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]]
  })

  
  get f(){
    return this.regForm.controls
  }
  onsubmit(){
    this.submit=true
     //alert("clicked the submit button")
     //console.log("clicked...")
     console.log('f',this.f)
  }

  ngOnInit(): void {
  }


}
