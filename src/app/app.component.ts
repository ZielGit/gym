import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gym';
  firestore: Firestore = inject(Firestore);
  cargando: boolean = true;

  constructor()
  {

  }
}
