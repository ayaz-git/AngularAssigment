import { ApisevicesService } from './../service/apisevices.service';
import { Component  , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-kit';
  res: any;
  username :any;
  email:any;
  gender:any ='Male';
  status:any ='Active';
  registersuccess: boolean = false;
  deletesuccess: boolean = false;
  constructor(private apiservice : ApisevicesService) { 
    this.getDetails();
  }

  getDetails(){
    this.apiservice.get(' https://gorest.co.in/public/v2/users').subscribe((responce=>{
     this.res = responce;
   }))
  }

  // register user function start
  @ViewChild('registrationForm', { static: false }) public registrationForm: any;
  registerUser(){
    let payload =  {
      "name"  : this.username,
      "email" : this.email,
      "gender": this.gender,
      "status": this.status
     }
     this.apiservice.post(payload , 'https://gorest.co.in/public/v2/users').subscribe((responce=>{
      this.registersuccess = true;
      this.registrationForm.resetForm();
      setTimeout(() => {
        this.registersuccess = false;
      }, 3000);
   }))
  }

  deleteUser(id:any){
    this.apiservice.put('https://gorest.co.in/public/v2/users/'+id).subscribe((responce=>{
      this.deletesuccess = true;
      setTimeout(() => {
        this.deletesuccess = false;
      }, 3000);
  }))
  }
}


