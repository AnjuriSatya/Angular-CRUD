import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   email:any= "satya@gmail.com";
   pswrd:number = 12345;
   formData :any= "formGroup";
   showError:boolean = false;
  
  constructor( private router:Router) { }

  ngOnInit(): void {
    this.formData= new FormGroup({
      email :new FormControl('',[Validators.required]),
      password :new FormControl('',[Validators.required]),
    });
  }
 signIn(){
    if(this.email == this.formData.controls.email.value && this.pswrd == this.formData.controls.password.value){
     this.router.navigate(['/patients']);
    }
   else{
    this.showError = true;
   }
}
}