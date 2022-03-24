import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserAuthService } from 'app/auth/user-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private auth:UserAuthService,private router: Router) { }
show:boolean=false;
value: string;
 
  click(state)
  {
    this.value="";
   this.show=state;
  }
  DFORM: FormGroup
  onsubmit() {
    const cred=this.DFORM.value
    this.auth.login(cred.email,cred.password).subscribe(r=>{
      
      this.router.navigate(['/dashboard']);
  
    },err=>{

      console.log(err);
    });
   
  }
  ngOnInit(): void {
    this.DFORM = this.fb.group({ email: new FormControl(''), password: new FormControl('') })
    
  }
 
}

