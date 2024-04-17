import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) {
    
  //Inicia el formulario usando FormBuilders
    this.formularioLogin= this.fb.group({
      
      'nombre': new FormControl("",Validators.required), //Se requiere el nombre para ingresar
      'password': new FormControl("",Validators.required) //Se requiere contraseña para ingresar

    });
   }

  ngOnInit() {
  }

}
