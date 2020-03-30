import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroups } from '../formgroup';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginform:FormGroup;
  
  constructor(private fgroup: FormGroups, private dataService: DataService) { }

  ngOnInit(){
    this.loginform = this.fgroup.myformtest();
  }

  appLogin(){
    var data = this.loginform.value
    console.log(data)
    this.dataService.apiPost(data,'login').subscribe(res=>{
      console.log(res)
      if(res){
        alert('hi')
      }
    })

  }

}
