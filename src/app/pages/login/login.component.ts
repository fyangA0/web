import fetch from '../../../api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private message: NzMessageService) { 
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required,Validators.minLength(6)]],
      remember: [false]
    });
  }

  ngOnInit(): void {
  
  }

  submitForm(){
     const model = this.validateForm;

     if (model.valid) {
       fetch.post('/users', model.value)
        .then(({ token, user }) => {
          this.message.success('登录成功！')
          this.router.navigateByUrl('home')
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          console.log(user)
        })
        .catch(({ message }) => {
          this.message.error(message)
        })

     }
  }

}
