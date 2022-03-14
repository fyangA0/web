import fetch from '../api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'connexion';
  
  constructor(
    private router: Router,
    private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.getAuthInfo()
  }

  getAuthInfo() {
    fetch.get('/auth')
      .then(user => {
        this.message.success('登录成功！')
        this.router.navigateByUrl('home')
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch(() => {
        this.message.error('请重新登录！')
        this.router.navigateByUrl('login')
      })
    }
}
