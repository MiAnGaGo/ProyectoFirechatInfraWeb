import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styles: []
})
export class ContactosComponent implements OnInit {
  elemento: any;
  constructor(public _cs: ChatService) { }

  ngOnInit() {
    this.elemento = document.getElementById('app-contactos');
  }

}
