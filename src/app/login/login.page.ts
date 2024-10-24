import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule, FormsModule] 
})
export class LoginPage implements OnInit {
   
   email: string = '';
   password: string = '';
 
   
   credenciales = [
     ['karencamacho484@gmail.com', '1234'],
     ['andres@gmail.com', '1234'],
   ];
 
   constructor(private navCtrl: NavController) {}
 
   ngOnInit(): void {}
 
   iniciarSesion(): void {
     // Verificar credenciales
     const credencialValida = this.credenciales.some(
       ([email, password]) => email === this.email && password === this.password
     );
 
     if (credencialValida) {
       alert('Has iniciado sesión con éxito');
       this.navCtrl.navigateForward('/main');
     } else {
       alert('Correo o contraseña incorrectos');
     }
   }
}
