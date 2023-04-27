import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup= new FormGroup({});
/* 1)- Instanciamos el Emitter */
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      email: ['', Validators.compose([Validators.required ,Validators.email])],
      password: ['',Validators.required]
    })
  }

  /* getters para obtener luego los errores  */
  get email() {
    /*  */
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submitLogin(){
    if (this.loginForm.valid) {
      console.table(this.loginForm.value)
      /* 2)- Emitimos o enviamos los valores que recibira el componente padre */
      this.loginAction.emit(this.loginForm.value);
      this.loginForm.reset()
    }
  }
}
