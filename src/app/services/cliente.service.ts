import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Cliente } from '../interfaces/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private firestore: Firestore = inject(Firestore)) { }

  addCliente(cliente: Cliente) {
    const clienteRef = collection(this.firestore, 'clientes');
    return addDoc(clienteRef, cliente);
  }

  getClientes(): Observable<Cliente[]>{
    const clienteRef = collection(this.firestore, 'clientes');
    return collectionData(clienteRef, { idField: 'id'}) as Observable<Cliente[]>;
  }
}
