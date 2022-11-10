import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto.models';

@Component({
  selector: 'phw-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit {
  fotos: Foto[] = [
  ]

  //Injeção de dependendência é quando solicitamos uma ferramenta.
  //Toda injeção de dpedencia deve ser feita no parentêses {} do construtor.
  //Toda ferramenta.
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }

}
