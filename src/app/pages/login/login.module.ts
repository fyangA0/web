import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { LoginComponent } from './login.component';
import { NzMessageService } from 'ng-zorro-antd/message';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShareModule,
    
  ],
  providers: [
    { provide: NzMessageService }
  ]
})
export class LoginModule { }
