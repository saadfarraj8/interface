import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';
import { UserAuthService } from 'app/auth/user-auth.service';
import { User } from 'app/interface/User';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
  DFORM: FormGroup
  username:string;

   constructor(private api:ApiService,private auth:UserAuthService ,private fb: FormBuilder)
   {
       this.auth.loggedin();

   }
   user: User 
   private GetUserUsername(token:string):string
  {
    console.log(atob(token.split('.')[0]),atob(token.split('.')[1]));
    
    const x=JSON.parse(atob(token.split('.')[1]));
    return  x.sub;
    
  }
  
  getuserinfo()
     {
      
      this.api.GetUser(this.GetUserUsername(localStorage.getItem('auth'))).subscribe(r=>{
      this.user=r as User
      console.log(r);
      this.DFORM = this.fb.group({ username: new FormControl(this.user.username),
        email: new FormControl(this.user.email),
       name: new FormControl(this.user.name),
       lastname: new FormControl(this.user.lastname),
       address: new FormControl(this.user.adresse),
       city: new FormControl(this.user.city),
       country: new FormControl(this.user.country) })
      this.username=this.user.username
      },err=>{
  
        console.log(err);
      });
     }
     
    
    
    ngOnInit(): void{ 
     
         this.getuserinfo();
        }
    }
