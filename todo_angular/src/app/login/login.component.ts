import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { TaskService } from '../service/task.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  LoginForm=new FormGroup({
  "username":new FormControl("",[Validators.required]),
  "password":new FormControl("",[Validators.required])
  }
  )

  get username(){
    return this.LoginForm.get("username")
  }

  get password(){
    return this.LoginForm.get("password")
  }
  authenticate(){
    let data=this.LoginForm.value
    this.service.getToken(data).then(res=>res.json()).then(data=>{
      let token=data.token
      localStorage.setItem("token","Token "+token)
      this.router.navigateByUrl("index")
    })
    
  }
  constructor(private service:TaskService,private router:Router){

  }
}
