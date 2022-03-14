import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  user = null

  constructor(
    private router: Router,
    private message: NzMessageService) {
  }

  ngOnInit(): void {
  }

  handleLogout(): void {
    localStorage.clear()
    this.message.success('退出成功！')
    this.router.navigateByUrl('login')
  }
}
