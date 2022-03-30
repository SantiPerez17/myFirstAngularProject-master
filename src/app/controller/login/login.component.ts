import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;
  usuarios: Array<Usuario> = new Array<Usuario>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formLogin = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      contraseña: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])]
    })
  }

  registrar() {
    console.log("datos ingresador: ", this.formLogin.value)
    this.usuarios.push(this.formLogin.value as Usuario);
    //para resetear el formulario luego de cargarlo una vez
    this.formLogin.reset()
  }

  editar() {
    
  }

}
