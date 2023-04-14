import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/contact.inerface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.css'],
})
export class ContactDetailPageComponent implements OnInit {
  id: any | undefined;
  contact: IContact={
    id:1,
    nombre:"",
    email:"",
    apellido:"",
    sexo:""
  };
  filtro:string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });
    if (history.state.contact) {
      this.contact = history.state.contact;
    }
    if (history.state.filtro) {
      this.filtro = history.state.filtro;
    }
  }
}
