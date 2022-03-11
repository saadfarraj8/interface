import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
show:boolean=false;
value: string;
 
  click(state)
  {
    this.value="";
   this.show=state;
  }
  DFORM: FormGroup
  onsubmit() {
    if(!this.show)
    {
      console.log(this.DFORM.value);
    }
    else
    {
      console.log(this.DFORM.value);
    }
   
  }
  ngOnInit(): void {
    this.DFORM = this.fb.group({ email: new FormControl(''), password: new FormControl(''),nom: new FormControl(''),pass_c: new FormControl('') })
    
  }
 
}

