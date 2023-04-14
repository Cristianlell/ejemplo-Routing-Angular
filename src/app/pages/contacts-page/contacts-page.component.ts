import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.inerface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  filtroSexo: string = 'todos';
  contactos: IContact[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    // Obtenemos las query params
    this.route.queryParams.subscribe(
      (params: any) => {
        if (params.sexo) {
          this.filtroSexo = params.sexo
        }
      }
    );
    //filtramos
    this.contactService
      .obtenerContactos(this.filtroSexo)
      .then((res) => (this.contactos = res))
      .catch((err) => console.error("ha habido un error: ",err))
      .finally(() => console.info("Petición de contacto terminada")
      );
  }

  irAHome(contact: IContact) {
    this.router.navigate(['home'], { state: { data: contact } });
  }
}
