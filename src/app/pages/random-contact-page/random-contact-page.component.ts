import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomUser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.css'],
})
export class RandomContactPageComponent implements OnInit {
  contact: IRandomContact | undefined;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.randomUserService.obtenerRandomContact().subscribe((res: Results) => {
      this.contact = res.results[0];
    });
  }

  obtenerNuevoContacto() {
    this.randomUserService.obtenerRandomContact().subscribe({
      next: (res: Results) => {
        this.contact = res.results[0];
      },
      error: (error) => console.error(error),
      complete: () => console.info('Petición de random contact terminada'),
    });
  }
  listaContactos:IRandomContact[] = []
  obtenerListaContactos(n: number) {
    this.randomUserService.obtenerRandomContacts(n).subscribe({
      next: (res: Results) => {
       this.listaContactos = res.results
        console.log(this.listaContactos)
      },
      error: (error) => console.error(error),
      complete: () => console.info('Petición de random contacts terminada'),
    });
  }
}
