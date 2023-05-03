import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRandomContact } from 'src/app/models/randomUser';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.css'],
})
export class ContactDetailPageComponent implements OnInit {
  id: any | undefined;
  contact: IRandomContact | undefined;
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
