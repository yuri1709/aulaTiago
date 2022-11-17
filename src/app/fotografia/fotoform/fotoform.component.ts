import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phw-fotoform',
  templateUrl: './fotoform.component.html',
  styleUrls: ['./fotoform.component.css']
})
export class FotoformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Metodo de cadastro
  cadastrar(form: any) {
    console.log(form.value);
  }
}
