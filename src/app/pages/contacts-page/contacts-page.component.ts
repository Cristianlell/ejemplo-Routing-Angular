import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/contact.inerface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit{
  listaContactos: IContact[]=[
    {
      id:0,
      nombre:'Cristian',
      apellido:'Lell',
      email:'cristian@gmail.com'
    },
    {
      id:1,
      nombre:'Bastian',
      apellido:'Lell',
      email:'bastian@gmail.com'
    },  
    {
      id:2,
      nombre:'Luciana',
      apellido:'Cordoba',
      email:'luciana@gmail.com'
    },
  ]
  constructor() {
  }

  ngOnInit(): void {
  }
}
