import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.inerface';
import { IRandomContact, Results } from '../../models/randomUser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  filtroSexo: string = 'todos';
  listaContactos: IRandomContact[] = [];
  cargando:boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private randomUserService: RandomUserService
  ) {}

  ngOnInit(): void {
    // Obtenemos las query params
    this.route.queryParams.subscribe((params: any) => {
      if (params.sexo === 'female' || params.sexo === 'male') {
        this.filtroSexo = params.sexo;
        //implementamos lista de contacto por genero
        this.randomUserService.obtenerRandomContacts(10, params.sexo).subscribe({
          next: (res: Results) => {
            this.listaContactos = res.results;
            console.log(this.listaContactos);
          },
          error: (error) => console.error(error),
          complete: () =>{
              console.info('Petición de random contacts terminada')
              this.cargando = false;
            },
        });
      } else {
        //implementamos lista de contacto aleatoria
        this.randomUserService.obtenerRandomContacts(10).subscribe({
          next: (res: Results) => {
            this.listaContactos = res.results;
            console.log(this.listaContactos);
            this.cargando = false;
          },
          error: (error) => console.error(error),
          complete: () => {
            console.info('Petición de random contacts terminada')
            this.cargando = false;
          },
        });
      }
    });
  }

  seleccionar(contact: IRandomContact) {
    this.router.navigate(['dashboard'], { state: { data: contact } });
  }
}
