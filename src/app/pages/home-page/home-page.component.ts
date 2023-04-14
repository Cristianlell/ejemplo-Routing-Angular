import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.inerface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  contactoSeleccionado: IContact | undefined;
  token: string | null = null;
  constructor( private router : Router) { // inyectamos Router
  }
  
  ngOnInit(): void {
    //recibo el state 
    this.token = sessionStorage.getItem('token');
    if (history.state.data) {
      this.contactoSeleccionado = history.state.data;
    }
    
  }

  handleNavContacts() : void{
    let navigationExtras : NavigationExtras={
      queryParams:{
        sexo:'todos'
      }
    }
    this.router.navigate(['contacts'], navigationExtras)
  }
}
