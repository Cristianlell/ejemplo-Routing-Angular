import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomUser';
import { Input } from '@angular/core';
@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css'],
})
export class RandomUserComponent implements OnInit {

  @Input() randomContact: IRandomContact | undefined;
  
  constructor() {}

  ngOnInit(): void {}
}
