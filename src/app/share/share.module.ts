import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpinModule } from 'ng-zorro-antd/spin';



@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzAlertModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzSpinModule, 
    NzListModule,
    FormsModule
    
    
    
   
  ],
  exports:[
    FormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzAlertModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzSpinModule, 
    NzListModule,
    FormsModule
    
  ]
})
export class ShareModule { }
