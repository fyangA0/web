import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';




@NgModule({
  declarations: [],
  imports: [
    
    HomeModule,
    LoginModule
    
  ],
  exports:[
    HomeModule,
    LoginModule
  ]
})
export class PagesModule { }
