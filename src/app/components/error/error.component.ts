import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirect(){
    window.location.href="https://www.movistar.co/atencion-al-cliente/chat-asistente-virtual"; 
  }
}
