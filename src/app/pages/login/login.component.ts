import { Component } from '@angular/core';
import { AccountService } from '../../services/account-service/account.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CommonModule],
  providers:[AccountService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  loginForm  = this.formBuilder.group({
    username: ['', Validators.required],
    password:['',Validators.required]
  })


  constructor(private service:AccountService, private router:Router, private formBuilder:FormBuilder){}
  err:string | null = null;
  clsDanger:string | null = null;
  currentUrl:string = '';


  onSubmit():void {
    console.log('login form : ', this.loginForm.value);
    if(this.loginForm.value !== null || this.loginForm.value !== ''){
      this.checkLogin(this.loginForm.value)
    }

    
    this.currentUrl = this.router.url;
    console.log('current url : ', this.currentUrl)
  }


  checkLogin(user:any) {
    this.service.getData().subscribe(
      (accounts: any[]) => {
        let account = accounts.find((e) => e.username === user.username)
          if(account) {
            if(account.password === user.password){
              this.service.login(account)
              this.currentUrl = '';
            } else {
              this.err = 'username or password is incorrect !!!';
              this.clsDanger = 'danger-wrong'
            }
          } else {
            this.err = 'User Not Found !!!';
            this.clsDanger = 'danger-wrong'
          }
        }
      )
  }
}
