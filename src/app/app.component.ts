import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class AppComponent {
  constructor( private router: Router) {}

  async cerrarSesion(){
    this.router.navigate(['/login']);
  }
}
