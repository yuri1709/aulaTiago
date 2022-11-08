import { Component, Input, OnInit } from '@angular/core';
import { Foto } from './foto.models';

@Component({
  selector: 'phw-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
 //ARRAY DE FOTOS MOVIDO PARA folitlist.components.ts
 @Input() imagem = '';

  constructor() { }

  ngOnInit(): void {
  } 
}