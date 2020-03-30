import {FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormGroups {
    public myForm: FormGroup;

    constructor(private fb:FormBuilder){}
  
    myformtest(){
      this.myForm = this.fb.group({
        UserName:['',[Validators.required]],
        Password:['',[Validators.required]],
      });
      return this.myForm;
    }
}
